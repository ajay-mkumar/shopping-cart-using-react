import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { shopContext } from "../../context/shop-context";
import { Cartitem } from "./cart-items";
import { useNavigate } from "react-router-dom";

export const Cart=()=>{
    const { cartItems ,getTotalCartAmount}=useContext(shopContext)
    const totalamount=getTotalCartAmount()

    const navigate=useNavigate()

    return(
        <div className="cart">
            <h2>Your Cart Items</h2>
            <div className="cartitems">
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id]!=0){
                       return <Cartitem data={product} />
                    }
                })}
            </div>
            {totalamount > 0 ? (
            <div className="checkout">
                <p>subtotal:${totalamount}</p>
                <button onClick={()=>navigate('/')}>continue shopping</button>
                <button>checkout</button>
                </div>
) : (<h1>your cart is empty</h1>) }
           
        </div>
    )
}