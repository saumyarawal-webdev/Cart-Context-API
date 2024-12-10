
import { createContext, useState} from "react";

export const CartContext=createContext(null);

export const CartProvider=(props)=>{
    const [items, setItems]=useState([])
    const removeItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
      };
    return(
        <CartContext.Provider value={{items, setItems, removeItem}}>
            
            {props.children}
        </CartContext.Provider>
    )
}