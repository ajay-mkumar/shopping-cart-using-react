import React, { useContext } from "react";
import './cart.css'
import { shopContext } from "../../context/shop-context";

export const Cartitem=(props)=>{
    const {id,productName,price,productImage}=props.data;
    const {cartItems,removeFromCart,addToCart,updateCartItemCount}=useContext(shopContext)

    return(
        <div className="cartItem">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
           
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={()=>removeFromCart(id)}> - </button>
                <input  value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value,id))} />
                <button onClick={()=>addToCart(id)}> + </button>

            </div>
            </div>
            
            
        </div>
    )
}