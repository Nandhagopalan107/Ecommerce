import React from 'react'

const AddProduct = () => {
  return (
    <div className="addproduct">
        <form className='addproduct-form'>
        <h1 className="addproduct-heading">
            Add Products
        </h1>
        <div className="addproduct-fields">
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
          <button type="submit" className="add">
            Add product
          </button><br></br>
        </div>
        </form>
    </div>
  )
}

export default AddProduct
