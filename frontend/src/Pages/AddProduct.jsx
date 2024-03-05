import React from 'react'
import './CSS/AddProduct.css'
import axios from 'axios';
import { useState } from 'react';
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
        <h1 >Add Products</h1>
        <div className="addproduct-container">
          <div className="addproduct-fields">
            <label>Product name</label>
            <input type="text" name="name" />
            <label>Product Description</label>
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
              Add product
            </button><br></br>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
