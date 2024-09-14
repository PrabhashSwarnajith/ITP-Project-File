import { Statistic,Typography } from "antd";
import "./index.css";
import axios from 'axios';
import React, { useState,useEffect } from 'react';

function Dashbaord(){

    const [medicine, setMedicine] = useState([]);
    const [numRows, setNumRows] = useState(0);

useEffect(()=>{
    function getMedicine() {
        axios.get("http://localhost:3100/labtest/").then((res) => {
            setMedicine(res.data);
            setNumRows(res.data.length);
            console.log(res.data);
        }).catch ((err)=> {
            alert(err.massage);
        })
    }
    getMedicine();
},[])

    return(
    <div>
        <center><Typography.Title level={1}>Dashbaord</Typography.Title></center>
        
                           <div className="row">

                                {/*  <!-- --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                       Total Test</div>
                                                    <Statistic className="h5 mb-0 font-weight-bold text-gray-800" value={numRows}/>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Earnings (Monthly) Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Total Order</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">215</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!-- Pending Requests Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-warning shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Pending Orders</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                </div>
                             </div>

                            <div className="row">
                               {/*   <!-- medicine table --> */}
                               <div className="col-xl-8 col-lg-7">
                                <div className="card shadow mb-4">
                                        <table>
                                            <thead
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Lab Test</h6>
                                            </thead> 
                                            <tbody>  
                                                <div >

                                                        <table className="table table-striped table-bordered">
                                                        <thead className="table-dark" >
                                                            <tr>
                                                            <th scope="col"><center>Test Code</center></th>
                                                            <th scope="col"><center>Test Name</center></th>
                                                            <th scope="col"><center>Test Description</center></th>
                                                            <th scope="col"><center>Test Price</center></th>
                                                            
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {medicine.map(item =>(
                                                                <tr key={item.id}>
                                                                <td><center>{item.testCode}</center></td>
                                                                <td><center>{item.testName}</center></td>
                                                                <td><center>{item.testDescription}</center></td>
                                                                <td><center>{item.testPrice}</center></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>v
                                                        </table>                               

                                                        </div>
                                                
                                                
                                            
                                            </tbody> 
                                        </table>
                                    
                                    </div>
                                 </div>
                            
                                
                                </div>
                            </div>
                            
                            
)}


export default Dashbaord;