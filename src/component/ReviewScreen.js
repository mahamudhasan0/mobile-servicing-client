import axios from "axios";
import React, { useEffect, useState } from "react";

const ReviewScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/review").then((res) => {
      setData(res.data);
    });
  },[setData,data]);
 
  return (
    <div>
      <h3>Testimonial</h3>
      {data.map((item) => {
        const { name, description, company,file } = item;
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
              border: "1px solid red",
              margin: "0 auto",
            }}
          >
            <div>
            <img src={file} alt=''/>
              <div>
                <p>{name}</p>
                <p>{company}</p>
              </div>
            </div>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewScreen;
