import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider";
import {decrementItemQuantity, removeFromCart  } from "../../cartReducer";

const Cart = () => {

    const { cart, dispatch } = useContext(CartContext);

    const removeFromCartHandler = (itemToRemove) => {
        dispatch(removeFromCart(itemToRemove));
    }

    const decrementQuantity = (item) => {
        dispatch(decrementItemQuantity(item));
    }

    const totalPrice = () => {
        let price = 0
        cart.forEach(cartItem => {
            if (cartItem.salePrice < (cartItem.price)) {
                price = price + (parseFloat(cartItem.salePrice) * parseInt(cartItem.quantity))
            } else {
                price = price + (parseFloat(cartItem.price) * parseInt(cartItem.quantity))
            }
        })
        return price + 'лв.'
    }
    
    return (
        <div className="auto-container">
            {cart.map((item, id) => (
            <div className="cartItem" key={id}>
            {item.id} {item.name} - {item.quantity}  {<span onClick={() => removeFromCartHandler(item)}>×</span>}
            </div>
        ))}

        total: {totalPrice()}
        </div>
    )
}

export default Cart