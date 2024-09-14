import { Statistic,Typography } from "antd";
import "./index.css";
import axios from 'axios';
import React, { useState,useEffect } from 'react';

function Dashbaord(){

    const [medicine, setMedicine] = useState([]);
    const [numRows, setNumRows] = useState(0);
    const [order, setOrder] = useState([]);
    const [numRow, setNumRow] = useState(0);

    useEffect(()=>{
        function getOrder() {
            axios.get("http://localhost:3000/order/").then((res) => {
                setOrder(res.data);
                setNumRow(res.data.length);
                console.log(res.data);
            }).catch ((err)=> {
                alert(err.massage);
            })
        }
        getOrder();
    },[])

useEffect(()=>{
    function getMedicine() {
        axios.get("http://localhost:3000/inventory/").then((res) => {
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
    <div><center>
        <Typography.Title level={1}>Dashbaord</Typography.Title></center>

        <center>
                           <div className="row">

                                {/*  <!-- --> */}
                                <div className="col-xl-3 col-md-6 mb-4" style={{marginRight: '85px',marginLeft: '70px'}}>
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Total Stock</div>
                                                    <Statistic className="h5 mb-0 font-weight-bold text-gray-800" value={numRows}/>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  <!--Card Example --> */}
                                <div className="col-xl-3 col-md-6 mb-4" style={{marginRight: '85px'}}>
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Total Orders</div>
                                                    <Statistic className="h5 mb-0 font-weight-bold text-gray-800" value={numRow}/>
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
                                                        Pending Requests</div>
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
                             </center>

                            <div className="row">

                               {/*   <!-- medicine table --> */}
                                <div class="col-5" style={{marginRight: '70px',marginLeft: '70px'}}>
                                    <div class="table-responsive bg-white" data-mdb-perfect-scrollbar="true" style={{position: "relative", height:" 300px"}}>
                                    <div className="card shadow mb-4">
                                        <table>
                                            <thead
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h5 className="m-0 font-weight-bold text-primary">Medicine</h5>
                                            </thead> 
                                            <tbody>  
                                                <div >

                                                        <table className="table table-striped table-bordered">
                                                        <thead className="table-dark" >
                                                            <tr>
                                                            <th scope="col">Drug ID</th>
                                                            <th scope="col">Drug Name</th>                                          
                                                            <th scope="col">Quantity</th>                                          
                                                            <th scope="col">Expire Date</th>
                                                            
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {medicine.map(item =>(
                                                                <tr key={item.id}>
                                                                <td>{item.drugId}</td>
                                                                <td>{item.name}</td>                                               
                                                                <td>{item.quantity}</td>                                             
                                                                <td>{item.exdate}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        </table>                               

                                                        </div>
                                                
                                                
                                            
                                            </tbody> 
                                        </table>
                                        </div>
                                        </div>
                                        
                                    
                                    </div>
                                 
                            
                                 
                                  <div class="col-5">
                                    <div class="table-responsive bg-white" data-mdb-perfect-scrollbar="true" style={{position: "relative", height:" 300px"}}>
                                    <div className="card shadow mb-4">
                                        <table>
                                            <thead
                                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h5 className="m-0 font-weight-bold text-primary">Orders</h5>
                                            </thead>
                                            <tbody>  
                                                <div >

                                                        <table className="table table-striped table-bordered">
                                                        <thead className="table-dark" >
                                                            <tr>
                                                            <th scope="col"><center>Order Id</center></th>
                                                            <th scope="col"><center>Company name</center></th>
                                                            <th scope="col"><center>Drug Name</center></th>
                                                            <th scope="col"><center>Quantity</center></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {order.map(item =>(
                                                                <tr key={item.id}>
                                                                <td><center>{item.orderId}</center></td>
                                                                <td><center>{item.company}</center></td>
                                                                <td><center>{item.drugName}</center></td>
                                                                <td><center>{item.quantity}</center></td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        </table>                               

                                                        </div>
                                                
                                                
                                            
                                            </tbody> 
                                        </table>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                       
     </div>
                            
                            
)}


export default Dashbaord;