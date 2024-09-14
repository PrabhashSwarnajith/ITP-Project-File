import React from "react";
import logo from './logo.jpeg';
import I1 from "./header.jpeg";

function AppHeader() {
    return (
      <div className="AppHeader">
           <div style={{ display: 'flex',backgroundImage:`url(${I1})`, alignItems: 'center', justifyContent: 'flex-start',backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        opacity: 1.0, // Set the opacity of the image (0.0 to 1.0)
        filter: "brightness(90%)" }}>
         <img src={logo} width={"10%"} style={{ padding: '10px'}}/>
           <center><h1>Laboratory</h1></center>
           
          <space>
            
          </space>

        </div>
      </div>
    );
  }
  
  export default AppHeader;