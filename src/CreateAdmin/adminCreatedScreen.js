import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminScreenss = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/create").then((res) => {
      setData(res.data);
    });
  },[setData,data]);
 
  return (
    <div>
      <h3>Admin Email</h3>
      {data.map((item) => {
        return (
            <div><p>Admin Email:{item.email}</p></div>
        )
         
      })}
    </div>
  );
};

export default AdminScreenss;
