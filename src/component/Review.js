import React, { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";

const Review = () => {
  const [review, setReview] = useState({
    name: "",
    company: "",
    description: "",
    file:''
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
    axios.post("http://localhost:5000/api/review", review);
    setReview({
      name: "",
      company: "",
      description: "",
      file:''
    });
  };
  return (
    <div className='row'>
      <form className="align-items-center">
        <label>Your Name</label>
        <input onChange={handleChange} value={review.name} name="name" />
        <br/>
        <label>Company Name</label>
        <input onChange={handleChange} value={review.company} name="company" />
        <br/>
        <label>Description</label>
        <input
          onChange={handleChange}
          value={review.description}
          name="description"
        />
        <br/>
         <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setReview({ ...review, file: base64 })
            }
          />
          <br/>
        <button onClick={handleSubmit}>Review</button>
      </form>
    </div>
  );
};

export default Review;
