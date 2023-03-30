import {createContext, useState} from "react";
import { Cartitem } from "../Pages/cart/cart-items";
import { PRODUCTS } from "../products";

export const shopContext=createContext(null)

const defaultCart=()=>{
    let cart={}
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0
    }
    return cart;
}

export const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(defaultCart());

    const getTotalCartAmount=()=>{
        let totalamount=0;
        for ( const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalamount += cartItems[item] * itemInfo.price;
            }
        }
        return totalamount;
    }

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    const updateCartItemCount=(newamt,itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:newamt}))
    }
    const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount};

  return(
    <shopContext.Provider value={contextValue}>{props.children}</shopContext.Provider>
    )
}