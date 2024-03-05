import React from 'react'
import './CSS/AddProduct.css'
import axios from 'axios';
import { useState } from 'react';
const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    desc: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleFileChange = (event) => {
    setProductData({
      ...productData,
      image: event.target.files[0],
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("productName", productData.name);
      formData.append("description", productData.desc);
      formData.append("category", productData.category);
      
      formData.append("quantity", productData.quantity);
      formData.append("price", productData.price);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

      // // Adjust the URL according to your backend endpoint
      const response = await axios.post(
        "http://localhost:8080/addnewproduct",
        formData,
        
      );

      // console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };
  return (
    <div className="addproduct">
      <form className="addproduct-form">
        <h1 className="addproduct-heading">Add Products</h1>
        <div className="addproduct-fields">
          <label>Product name</label>
          <input type="text" name="name" onChange={handleInputChange} />
          <label>Product Description</label>
          <input type="text" name="desc" onChange={handleInputChange} />
          <label className="label">Product category</label>
          <select id="category" name="category" onChange={handleInputChange}>
            <option value="" disabled>
              Select a category
            </option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>

          </select>
          
          <label className="label">Product quantity</label>
          <input type="number" name="quantity" onChange={handleInputChange}/>
          <label className="label">Product price</label>
          <input type="number" name="price" onChange={handleInputChange} />
          <button type="submit" className="add" onClick={handleFormSubmit}>
            Add product
          </button>
          <br></br>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
