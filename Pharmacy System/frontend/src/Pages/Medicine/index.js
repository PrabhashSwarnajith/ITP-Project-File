import {Typography } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



function Medicine(){
    
    const [medicine, setMedicine] = useState([]);
    

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



//Edit medicine



//Delete medicine

const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/inventory/${id}`)
    .then((res)=> {
        alert("Deleted successfully");
    });
    setMedicine(medicine.filter(item => item._id !== id));
  }

//Search
  const [searchmed,setMedicin]=useState("");
  function handleSearch(event){
    setMedicin(event.target.value);
}

 return(
        <div >

            <div class="row"><center>
            <Typography.Title level={1}>Medicine</Typography.Title></center>
            <div class="col-md-4 mb-4 left" style={{paddingLeft:70}}>
            <input type="text" id="datatable-search-input"  className="form-control" onChange={handleSearch} placeholder="Search" ></input>
            </div>
            </div>
           
            <div class="container">
             <div class="row justify-content-center">
              <div class="col-55">
                 <div class="table-responsive bg-white" data-mdb-perfect-scrollbar="true" style={{position: "relative", height:" 450px"}}>
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark" >
                            <tr>
                            <th scope="col"><center>Drug ID</center></th>
                            <th scope="col"><center>Drug Name</center></th>
                            <th scope="col"><center>Category</center></th>
                            <th scope="col"><center>Store Box</center></th>
                            <th scope="col"><center>Selling Price</center></th>
                            <th scope="col"><center>Quantity</center></th>
                            <th scope="col"><center>Company</center></th>
                            <th scope="col"><center>Effects</center></th>
                            <th scope="col"><center>Expire Date</center></th>
                            <th scope="col"><center>Unit</center></th>
                            <th scope="col"><center> Reoderlevel</center></th>
                            <th scope="col"><center>Action</center></th>
                           
                            </tr>
                        </thead>
                        <tbody>
                            {medicine.filter(f => f.name.toLowerCase().includes(searchmed))
                            .map(item =>(
                                <tr key={item.id}>
                                <td><center>{item.drugId}</center></td>
                                <td><center>{item.name}</center></td>
                                <td><center>{item.category}</center></td>
                                <td><center>{item.storebox}</center></td>
                                <td><center>{item.sellprice}</center></td>
                                <td><center>{item.quantity}</center></td>
                                <td><center>{item.company}</center></td>
                                <td><center>{item.effects}</center></td>
                                <td><center>{item.exdate}</center></td>
                                <td><center>{item.Unit}</center></td>
                                <td><center>{item.Reoderlevel}</center></td>
                                <td><center>
                                <Link to="/editM/${item.drugId}">
                                <button type="button2"  class="btn btn-warning" style={{paddingLeft:10}}> Edit </button>
                                </Link>
                                <button type="button" className="btn btn-danger" onClick={()=> handleDelete(item._id)}>Delete</button></center>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    </div>
                    </div>      
                    </div>   <br></br> <center>
                    <Link to={"/addOder"} className="btn btn-outline-dark">Add Order</Link> <t></t><t></t>
                    </center>


        </div>
)}
export default Medicine;