import {Typography } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css";

function Order(){
    const [order, setOrder] = useState([]);

    useEffect(()=>{
        function getOrder() {
            axios.get("http://localhost:3000/order/").then((res) => {
                setOrder(res.data);
                console.log(res.data);
            }).catch ((err)=> {
                alert(err.massage);
            })
        }
        getOrder();
    },[])

//Delete medicine

    const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/order/${id}`)
    .then((res)=> {
        alert("Deleted successfully");
    });
    setOrder(order.filter(item => item._id !== id));
  }




    return(
        <div>
        <Typography.Title level={1}><center>Order</center></Typography.Title>
        <div>
                        <div className="container">
                            <div className="row justify-content-center">
                            <div className="col-12">
                                    <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{position:" relative", height:"500px"}}>
                                    <table className="table table-striped mb-0">
                                        <thead className="table-dark" >
                                        <tr>
                                            <th scope="col"><center>Order Id</center></th>
                                            <th scope="col"><center>Company name</center></th>
                                            <th scope="col"><center>Drug Name</center></th>
                                            <th scope="col"><center>Quantity</center></th>
                                            <th scope="col"><center>Purchase Price</center></th>
                                            <th scope="col"><center>Status</center></th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {order.map(item =>(
                                                <tr key={item.id}>
                                                    
                                                <td><center>{item.orderId}</center></td>
                                                <td><center>{item.company}</center></td>
                                                <td><center>{item.drugName}</center></td>
                                                <td><center>{item.quantity}</center></td>
                                                <td><center>{item.price}</center></td>
                                                <td><center>{item.status}</center></td>
                                                
                                                <td><center>
                                                <button type="button" className="btn btn-danger" onClick={()=> handleDelete(item._id)}>Delete</button>
                                               </center>
                                                </td>
                                                </tr>
                                            ))}
                                        
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
    
                            
                        </div>
                        </div>
                    </div>
                 </div>
)}


export default Order;


