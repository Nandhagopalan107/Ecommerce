import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let index=0;index<all_product.length+1;index++)
    {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
  
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount =()=>{
            let totalAmount =0;
            all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    totalAmount+=e.new_price * Number(cartItems[e.id])
                }
            })

            return totalAmount;
    }
    const getTotalCartItems =()=>{
        let totalItem =0;
        all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                totalItem+=Number(cartItems[e.id])
            }
        })

        return totalItem;
}
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
   
    return (
        <ShopContext.Provider value = { contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider