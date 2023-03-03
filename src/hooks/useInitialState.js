import { useState } from "react";

import initialState from "../initialState";

const useInitialState=()=>{

    const [state,setState]=useState(initialState);

    const addToCart=payload => {
        
        

        function updateQuantity() {
            
            const cart = state.cart.map((product)=>{
            
                if (product.id==payload.id) {
                    const sum=product.quantity?product.quantity+1:1
                    const productUpdated={...product,quantity:sum}
                    return productUpdated
                } else {
                    return product
                }
                
                
            })

            return cart
        }

        function updateCart() {
            const found=state.cart.find((product)=>(product.id==payload.id))
            
            if (found) {
                return updateQuantity();
            }else {
                return [...state.cart,payload]
            }
        }


        const cartUpdated = (state.cart.length>0)?updateCart():[payload]
        
        
        setState({
            ...state,
            cart:[...cartUpdated]
        })
    }

    const removeFromCart=payload=>{
        setState(
            {
                ...state,
                cart:state.cart.filter(item=>item.id!==payload.id)
            }
        )
    }

    return {
        addToCart,
        removeFromCart,
        state
    };
}

export default useInitialState