import {Typography } from "antd";
import { useState } from "react";
import axios from "axios";


function AddMedicine(){

    const [ drugId,setdrugId] = useState ("");
    const [name, setName] = useState ("");
    const [category, setCategory] = useState ("");
    const [storebox,setStorebox] = useState ("");
    const [sellprice, setSellprice] = useState ("");
    const [quantity,setQuantity] = useState ("");
    const [company,setCompany] = useState ("");
    const [effects,setEffects] = useState ("");
    const [exdate, setExdate] = useState ("");
    

    function sendData(e){
       

        const newMedicine = {
            drugId,
            name,
            category,
            storebox,
            sellprice,
            quantity,
            company,
            effects,
            exdate
        }
        axios.post("http://localhost:3000/inventory/add",newMedicine).then((res)=>{
            alert("Medicine Added")
            
        }).catch((err)=>{
            alert(err)
        })
        
    }

    return(
        <div><center>
        <Typography.Title level={1}>Add Medicine</Typography.Title></center>
        <br></br>
        <div class="mask d-flex align-items-center h-100" >
                    <div className="container">            
                        <form className="row g-3" onSubmit={sendData}>

                          <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Drug ID</label>
                            <input type="Number" className="form-control" id="drugId" placeholder="0000" required
                            onChange={(e) =>{
                                setdrugId(e.target.value);
                            }}></input>

                            </div>

                            <div className="col-md-6 mb-4">

                            <label for="inputName" className="form-label">Drug Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Medicine Name" required 
                            onChange={(e) =>{
                                setName(e.target.value);
                            }}></input>

                            </div>

                            <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Category</label>
                            <select type="text" className="form-control" id="category" placeholder="Enter Medicine Category" required 
                            onChange={(e) =>{
                                setCategory(e.target.value);
                            }}>
                                <option value = "Select"> Select </option> 
                                <option value = "Analgesics"> Analgesics </option>
                                <option value = "Antacidst"> Antacids </option>
                                <option value = "Antipyretics"> Antipyretics </option>
                                <option value = "Antivirals"> Antivirals </option>
                                <option value = "Barbiturates"> Barbiturates </option>
                                <option value = "Cytotoxics"> Cytotoxics </option>
                                <option value = "Diuretics"> Diuretics</option>
                                <option value = "Hormones"> Hormones </option>
                                <option value = "Laxatives"> Laxatives </option> 
                            </select>

                            </div>

                            <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Store Box</label>
                            <select type="text" className="form-control" id="storebox" placeholder="Enter Store Box" required
                            onChange={(e) =>{
                                setStorebox(e.target.value);
                            }}>
                                <option value = "Select"> Select </option> 
                                <option value = "Box - A1"> Box - A1 </option> 
                                <option value = "Box - A2"> Box - A1 </option> 
                                <option value = "Box - B1"> Box - B1 </option> 
                                <option value = "Box - B2"> Box - B2 </option> 
                                <option value = "Box - C1"> Box - C1 </option> 
                                <option value = "Box - C2"> Box - C2 </option> 
                                <option value = "Box - D1"> Box - D1 </option> 
                                <option value = "Box - D2"> Box - D2 </option> 
                            </select>

                            </div>


                            <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Selling Price</label>
                            <input type="Number" className="form-control" id="sellprice" placeholder="Enter Selling Price" required
                            onChange={(e) =>{
                                setSellprice(e.target.value);
                            }}></input>

                            </div>

                            <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Quantity</label>
                            <input type="Number" className="form-control" id="quantity" placeholder="Enter Quantity" required
                            onChange={(e) =>{
                                setQuantity(e.target.value);
                            }}></input>

                            </div>  
                            <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Company</label>
                            <select type="text" className="form-control" id="company" placeholder="Enter Company Name" required
                            onChange={(e) =>{
                                setCompany(e.target.value);
                            }}>
                                <option value = "Select"> Select </option>
                                <option value = "Johnson & Johnson"> Johnson & Johnson </option> 
                                <option value = " Pfizer">  Pfizer  </option> 
                                <option value = "Merck & Co."> Merck & Co. </option> 
                                <option value = "GlaxoSmithKline"> GlaxoSmithKline </option> 
                                <option value = "Takeda"> Takeda </option> 
                                <option value = "Shanghai Pharmaceuticals Holding"> Shanghai Pharmaceuticals Holding </option> 
                                <option value = "AbbVie"> AbbVie </option> 
                                <option value = "Sanofi"> Sanofi </option> 
                                <option value = "Novartis">Novartis  </option>  
                            </select>

                            </div>

                            <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Effects</label>
                            <select type="text" className="form-control" id="" placeholder="Enter Medicine Effects" required
                            onChange={(e) =>{
                                setEffects(e.target.value);
                            }}>
                                <option value = "Select"> Select </option>
                                <option value = "headache"> headache </option>
                                <option value = "muscle paint"> muscle pain </option>
                                <option value = "chills"> chills </option>
                                <option value = "Rash"> Rash </option>
                                <option value = "Hives"> Hives </option>
                                <option value = "vomitingt"> vomiting</option>
                                <option value = "dizziness">dizziness </option>
                                <option value = "weight gain"> weight gain </option>
                            </select>

                            </div>
                            <div className="col-md-6 mb-4">

                            <label for="" className="form-label">Expire Date</label>
                            <input type="text"   id="exdate" placeholder="xxxx/xx/xx" required
                            onChange={(e) =>{
                                setExdate(e.target.value);
                            }}></input>

                            </div>  


                        <center> <div class="button-container">
                    
                           <div class="form-outline">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                         </div></center>

                        </form>
                       
                </div>
             </div>   

        </div>

)}


export default AddMedicine;