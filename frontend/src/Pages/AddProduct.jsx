import React, { useContext } from 'react'
import './CSS/AddProduct.css'
import axios from 'axios';
import ex_img from '../Components/Assets/product_21.png'
import { useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
const AddProduct = () => {
  const { all_product} = useContext(ShopContext);
  const [productData, setProductData] = useState({
    id: 37,
    name: "",
    desc: "",
    category: "",
    quantity: "",
    price: "",
    new_price: "",
    old_price: 80.5,
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

      all_product.push(productData);
      console.log(all_product)

      
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
            <option>men</option>
            <option>women</option>
            <option>kids</option>

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
