import { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AddTest(){

    const [testCode, settestCode] = useState ("");
    const [testName,settestName] = useState ("");
    const [testDescription,settestDescription] = useState ("");
    const [testPrice,settestPrice] = useState ("");


    function sendData(e){
        

        const newTest = {
            testCode,
            testName,
            testDescription,
            testPrice,
        
        }
        axios.post("http://localhost:3100/labtest/add",newTest).then((res)=>{
            alert("Order Added")
            
        }).catch((err)=>{
            alert(err)
        })


        
    }
    

    return(
        <div>
        <center><h2>Add New Test</h2></center>
        <div class="mask d-flex align-items-center h-100">
                    <div className="container">            
                        <form className="row g-3" onSubmit={sendData}>

                            <div className="form-group">

                            <label  className="form-label">Test Code</label>
                            <input type="Number" className="form-control" id="testcode"  required
                            onChange={(e) =>{
                                settestCode(e.target.value);
                            }}>
                                
                            </input>

                            </div>

                            <div className="form-group">

                                <label for="" className="form-label">Test Name</label>
                                <input type="text" className="form-control" id="quantity" placeholder="Enter Test Name" required
                                onChange={(e) =>{
                                    settestName(e.target.value);
                                }}></input>

                             </div>

                            <div className="form-group">

                            <label for="" className="form-label">Test Description</label>
                            <input type="text" className="form-control" id="price" placeholder="Enter Test Description" required
                            onChange={(e) =>{
                                settestDescription(e.target.value);
                            }}></input>

                            </div>   

                             <div className="form-group">

                            <label for="" className="form-label">Test Price</label>
                            <input type="text" className="form-control" id="price" placeholder="Enter Test Price" required
                            onChange={(e) =>{
                                settestPrice(e.target.value);
                            }}></input>

                            </div>                      
                   
                           <div class="form-outline">
                            <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>

                        </form>
                        <Link to="/labTest">
                         <button type="button2" class="btn btn-info"> Back </button>
                         </Link>
                    </div>    
                </div>
        </div>

)}
export default AddTest;