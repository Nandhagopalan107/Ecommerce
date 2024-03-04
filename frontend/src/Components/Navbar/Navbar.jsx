import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => { 

    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsdpbaVWoM-9zgJAbXQiaCQ7cBXF5q5CoQjpMzCZLIQ&s' alt = ""/>
            <p>CooperKart</p>

        </div>
        <ul className="nav-menu">
          <li onClick={() => {setMenu("shop")}}> <Link style = {{textDecoration : 'none'}} to ='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("Men")}}> <Link style = {{textDecoration : 'none'}}  to ='/Men'>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("Women")}}> <Link style = {{textDecoration : 'none'}}  to ='/Women'>Women </Link>{menu==="Women"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("Kids")}}> <Link style = {{textDecoration : 'none'}}  to ='/Kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
        </ul>

        <div className="nav-login-cart">
           <Link style = {{textDecoration : 'none'}}  to='/signup'> <button>Login</button></Link>
           <Link style = {{textDecoration : 'none'}}  to = '/cart' ><img src={cart_icon} alt=""/> </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
