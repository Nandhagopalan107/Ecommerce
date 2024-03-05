import React from 'react'
import './CSS/AddProduct.css'
import axios from 'axios';
import { useState } from 'react';
const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    desc: "",
    category: "",
    image: null,
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
      formData.append("name", productData.name);
      formData.append("desc", productData.desc);
      formData.append("category", productData.category);
      formData.append("image", productData.image);
      formData.append("quantity", productData.quantity);
      formData.append("price", productData.price);

      // Adjust the URL according to your backend endpoint
      const response = await axios.post(
        "http://localhost:8080/api/products/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };
  return (
    <div className="addproduct">
      <form className="addproduct-form">
<<<<<<< HEAD
        <h1 className="addproduct-heading">Add Products</h1>
        <div className="addproduct-fields">
          <input type="text" name="name" onChange={handleInputChange} />
          <input type="text" name="desc" onChange={handleInputChange} />
          <label className="label">Product category</label>
          <select id="category" name="category" onChange={handleInputChange}>
            <option value="" disabled>
              Select a category
            </option>
          </select>
          <label className="label">Product Image</label>
          <input type="file" accept=".jpeg, .png" onChange={handleFileChange} />
          <label className="label">Product quantity</label>
          <input type="text" name="quantity" onChange={handleInputChange}/>
          <label className="label">Product price</label>
          <input type="text" name="price" onChange={handleInputChange} />
          <button type="submit" className="add" onClick={handleFormSubmit}>
            Add product
          </button>
          <br></br>
=======
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
>>>>>>> 9fc8d6cab3b0508bf2f355a04bb080c544456b32
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
