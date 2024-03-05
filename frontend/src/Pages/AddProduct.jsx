import React from 'react'

const AddProduct = () => {
  return (
    <div className="addproduct">
        <form className='addproduct-form'>
        <h1 className="addproduct-heading">
            Add Products
        </h1>
        <div className="addproduct-fields">
            <input type="text" name="name" />
            <input type="text" name="desc" />
            <label className="label">Product category</label>
            <select id="category" name="category">
            <option value="" disabled>
              Select a category
            </option>

            </select>
            <label className="label">Product Image</label>
          <input type="file" accept=".jpeg, .png" />
          <label className="label">Product quantity</label>
          <input type="text" name="quantity"/>
          <label className="label">Product price</label>
          <input type="text"  name="price"/>
          <button type="submit" className="add">
            Add product
          </button>
        </div>
        </form>
    </div>
  )
}

export default AddProduct
