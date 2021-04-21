import React, { useState } from "react";
import axios from "axios";

const AdminCreate = () => {
  const [review, setReview] = useState({
    email: "",
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
    axios.post("http://localhost:5000/api/create", review);
    setReview({
      email: "",
    });
  };
  console.log(review)
  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          onChange={handleChange}
          value={review.email}
          name="email"
        />
        <button onClick={handleSubmit}>Make Admin</button>
      </form>
    </div>
  );
};

export default AdminCreate;
