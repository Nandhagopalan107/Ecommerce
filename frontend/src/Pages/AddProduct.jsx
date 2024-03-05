<<<<<<< HEAD
import React from 'react'
import './CSS/AddProduct.css'
=======
import React from "react";
import { useState } from "react";
import axios from "axios";
>>>>>>> b948cf41a5d28ae927ee2914d9c2cd5bc114bc84

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Adjust the URL according to your backend endpoint
      const response = await axios.post(
        "http://localhost:8080/api/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data); 
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };

  return (
    <div className="addproduct">
      <form className="addproduct-form">
        <h1 className="addproduct-heading">Add Products</h1>
        <div className="addproduct-fields">
<<<<<<< HEAD
          <input type="text" name="name" />
          <input type="text" name="desc" />
          <label className="label">Product category</label>
          <select id="category" name="category">
            <option value="" disabled>
              Select a category
            </option>
          </select>
          <label className="label">Product Image</label>
          <input type="file" accept=".jpeg, .png" onChange={handleFileChange} />
          <label className="label">Product quantity</label>
          <input type="text" name="quantity" />
          <label className="label">Product price</label>
          <input type="text" name="price" />
          <button type="submit" className="add" onClick={handleFormSubmit}>
=======
        <label className="label">Product Name</label>
            <input type="text" name="name" /><br></br>
            <label className="label">Product Description</label>
            <input type="text" name="desc" /><br></br>
            <label className="label">Product category</label>
            <select id="category" name="category">
            <option value="" disabled>
              Select a category
            </option>
            </select>
            <br></br>
            <label className="label">Product Image</label>
          <input type="file" accept=".jpeg, .png" /><br></br>
          <label className="label">Product quantity</label>
          <input type="text" name="quantity"/><br></br>
          <label className="label">Product price</label>
          <input type="text"  name="price"/><br></br>
          <button type="submit" className="add" class="product-submit">
>>>>>>> 2ec9e98dd151a32acdeaefac85dc467a127b72c9
            Add product
          </button><br></br>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
