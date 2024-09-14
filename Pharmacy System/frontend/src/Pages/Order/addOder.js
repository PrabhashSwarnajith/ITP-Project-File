import { useState, useEffect } from "react";
import axios from "axios";
import {Typography } from "antd";
import { Link } from "react-router-dom";


function AddOrder(){

    const [orderId, setOrderID] = useState ("");
    const [company,setCompany] = useState ("");
    const [drugName,setDrugName] = useState ("");
    const [price,setPrice] = useState ("");
    const [quantity,setQuantity] = useState ("");
    const [medicine, setMedicine] = useState([]);

    //option bar
    useEffect(()=>{
        function getMedicine() {
            axios.get("http://localhost:3000/inventory/").then((res) => {
                setMedicine(res.data);
                console.log(res.data);
            }).catch ((err)=> {
                alert(err.massage);
            })
        }
        getMedicine();
    },[])


    function sendData(e){
        

        const newOrder = {
            company,
            drugName,
            orderId,
            quantity,
            price
        
        }
        axios.post("http://localhost:3000/order/add",newOrder).then((res)=>{
            alert("Order Added")
            
        }).catch((err)=>{
            alert(err)
        })


        
    }
    //option bar

    return(
        <div>
        <center><Typography.Title level={1}>Add Order</Typography.Title></center>
        <br></br>
        <div class="mask d-flex align-items-center h-100">
                    <div className="container">            
                        <form className="row g-3" onSubmit={sendData}>

                            <div className="col-md-6 mb-4">

                            <label for="inputName" className="form-label">Company</label>
                            <select type="text" className="form-control" id="company" placeholder="Enter Company Name"  
                            onChange={(e) =>{
                                setCompany(e.target.value);
                            }}>
                                <option value = "Select"> Select </option>
                                {medicine.map(item => ( 
                                    <option key={item.id} value={item.id} required>{item.company}</option>
                                    ))}
                            </select>

                            </div>

                            <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Drur Name</label>
                            <select type="text" className="form-control" id="drugName" placeholder="Enter Drug Name" required 
                            onChange={(e) =>{
                                setDrugName(e.target.value);
                            }}>
                                <option value = "Select"> Select </option>
                                {medicine.map(item => (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                    ))} 
                            </select>

                            </div>

                            <div className="form-group">

                            <label  className="form-label">Order ID</label>
                            <input type="Number" className="form-control" id="orderId"  required
                            onChange={(e) =>{
                                setOrderID(e.target.value);
                            }}>
                                
                            </input>

                            </div>

                            <div className="form-group">

                                <label for="" className="form-label">Quantity</label>
                                <input type="text" className="form-control" id="quantity" placeholder="Enter Quantity" required
                                onChange={(e) =>{
                                    setQuantity(e.target.value);
                                }}></input>

                             </div>

                            <div className="form-group">

                            <label for="" className="form-label">Purchase Price</label>
                            <input type="text" className="form-control" id="price" placeholder="Enter Purchase Price" required
                            onChange={(e) =>{
                                setPrice(e.target.value);
                            }}></input>

                            </div>                       
                   <div class="button-container">
                    
                           <div class="form-outline">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                            </div><br></br>
                            <div><Link to="/medicine">
                         <button type="button2" class="btn btn-info"> Back </button>
                         </Link></div>
                         </div>

                            <div className="col-md-6 mb-4">

                            {/* <label for="inputName" className="form-label">Status</label>
                            <select type="text" className="form-control" id="status" placeholder="Starus" required 
                            onChange={(e) =>{
                                setCompany(e.target.value);
                            }}>
                                    <option value = "Select"> Select   
                                    </option> 
                                    <option value = ""> Medical   
                                    </option>
                                    <option value = ""> Surgery
                                    </option>  
                                    <option value = ""> Lab  
                                    </option>      
                            </select> */}

                            </div>

                        </form>
                        {/* <Link to="/medicine">
                         <button type="button2" class="btn btn-info"> Back </button>
                         </Link> */}
                    </div>    
                </div>
        </div>

)}


export default AddOrder;