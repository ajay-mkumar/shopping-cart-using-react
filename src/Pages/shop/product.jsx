import React,{useContext} from "react";
import './shop.css'
import { shopContext } from "../../context/shop-context";

export const Product=(props)=>{
    const {id,productName,productPrice,productImage}=props.data;
    const {cartItems,addToCart,removeFromCart}=useContext(shopContext);
    const Cartcount=cartItems[id]
    return(
        <div className="product">
            <img src={productImage}/>
            <div className="discrption">
                <p>{productName}</p>
                <p>{productPrice}</p> 
                
           </div>
           <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add to cart {Cartcount > 0 && <>({Cartcount})</>}</button>
        </div>
    )
}