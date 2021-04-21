import axios from "axios";
import React, { useEffect, useState } from "react";
import './service.css'

const AdminScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/admin").then((res) => {
      setData(res.data);
    });
  },[setData,data]);
   console.log(data)
  return (
    <div>
      <h3 className="text-center">Service</h3>
      {data.map((item) => {
        const { title, description, file,price } = item;
        return (
          
          <div class="row">
          <div class="d-flex align-items-center"> 
            <div  className="card" style={{width:"18rem" }}>
            <img src={file} alt=''/>  
                <p className="text-center">{title}</p>
                <p className="text-center">Price:${price}</p>
            <p>{description}</p>
            </div>
            </div>
          </div>
        );
      })}
    </div>
    
    
  );
};

export default AdminScreen;
