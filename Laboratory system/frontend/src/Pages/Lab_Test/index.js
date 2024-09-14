import { Typography } from "antd";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



function LabTest(){
    
    const [labTest, setLabTest] = useState([]);

useEffect(()=>{
    function getLabTest() {
        axios.get("http://localhost:3100/labtest/").then((res) => {
            setLabTest(res.data);
            console.log(res.data);
        }).catch ((err)=> {
            alert(err.massage);
        })
    }
    getLabTest();
},[])


//Update labTest


//Delete labTest

const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3100/labtest/${id}`)
    .then((res)=> {
        alert("Deleted successfully");
    });
    setLabTest(labTest.filter(item => item._id !== id));
  }

//Search
const [searchtest,setLabTes]=useState("");
function handleSearch(event){
  setLabTes(event.target.value);
}


 return(
        <div >

<div class="row"><center>
            <Typography.Title level={1}>Lab Test</Typography.Title></center>
            <div class="col-md-4 mb-4 left" style={{paddingLeft:70}}>
            <input type="text" id="datatable-search-input"  className="form-control" onChange={handleSearch} placeholder="Search" ></input>
            </div>
            </div>

        <table className="table table-striped table-bordered">
            <thead className="table-dark" >
                <tr>
                <th scope="col"><center>Test Code</center></th>
                <th scope="col"><center>Test Name</center></th>
                <th scope="col"><center>Test Description</center></th>
                <th scope="col"><center>Test Price</center></th>
                <th scope="col"><center>Action</center></th>
                </tr>
            </thead>
            <tbody>
                {labTest.filter(f => f.testName.toLowerCase().includes(searchtest))
                .map(item =>(
                    <tr key={item.id}>
                    <td><center>{item.testCode}</center></td>
                    <td><center>{item.testName}</center></td>
                    <td><center>{item.testDescription}</center></td>
                    <td><center>{item.testPrice}</center></td>
                    <td><center>
                    <button type="button"  style={{marginRight: '10px'}} className="btn btn-warning" onClick={()=> handleDelete(item._id)}>Edite</button>
                    <button type="button" className="btn btn-danger" onClick={()=> handleDelete(item._id)}>Delete</button></center>
                    </td>
                    </tr>
                ))}
            </tbody>
          </table><center>
          <Link to={"/addTest"} className="btn btn-primary">Add New Test</Link> 
          </center>


        </div>
)}
export default LabTest;