import React, { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";

const Admin = () => {
  const [review, setReview] = useState({
    title: "",
    price: "",
    description: "",
    file: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/admin", review);
    setReview({
      title: "",
      price: "",
      description: "",
      file: "",
    });
  };
  return (
    <div className="row">
      <form className="align-items-center">
        <label>Title</label>
        <input className="col-md-4" onChange={handleChange} value={review.title} name="title" />
        <br/>
        <label className="row">Price</label>
        <input  className="col-md-4" type='number' onChange={handleChange} value={review.price} name="price" />
        <br/>
        <label>Description</label>
        <input
         className="col-md-4"
          onChange={handleChange}
          value={review.description}
          name="description"
        />
        <br/>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setReview({ ...review, file: base64 })}
        />
        <br/>
        <button onClick={handleSubmit}>Upload Image</button>
      </form>
    </div>
  );
};

export default Admin;
