import { useCart } from '../../contexts/CartContext';
import {decrementItemQuantity, removeFromCart  } from '../../cartReducer';
import './Cart.css'

const Cart = () => {

    const { cart, dispatch } = useCart();

    const removeFromCartHandler = (itemToRemove) => {
        dispatch(removeFromCart(itemToRemove));
    }

    const financial = (price) => {
        return Number.parseFloat(price).toFixed(2) + 'лв.';
    }

    const itemPrice = (item) => {
        return (
            <>
                {item.salePrice
                ? <><span className="sale-price">{item.salePrice}</span> <span className="old-price">{item.price}</span></>
                : <><span className="price">{item.price}</span></>}
            </>
        )
    }

    const deliveryPrice = 4.9

    const totalPrice = () => {
        let price = 0
        cart.forEach(cartItem => {
            if (cartItem.salePrice && cartItem.salePrice < (cartItem.price)) {
                price = parseFloat(price) + (parseFloat(cartItem.salePrice) * parseInt(cartItem.quantity))
            } else {
                price = price + (parseFloat(cartItem.price) * parseInt(cartItem.quantity))
            }
        })
        return price + deliveryPrice
    }
    
    return (
        <div className="cart-component col-lg-4 col-md-12 col-sm-12">
            <h4>Продукти</h4>

            <div className="cart-items">
                {cart.map((item, id) => (
                    <div className="cart-item" key={id}>
                        <img src={item.image}  alt={item.name} className="image" />
                        <div className="details">
                             <span className="name">{item.name}</span>
                             {itemPrice(item)}
                             <span className="quantity">Количеств: {item.quantity}</span>
                             {<span className="remove-button" onClick={() => removeFromCartHandler(item)}>×</span>}  
                        </div>
                     </div>
                ))}
            </div>

            <div className="total-price">
                <span className="delivery-price">Цена на доставка: {financial(deliveryPrice)} </span>
                <span className="price">Общо: {financial(totalPrice())}</span>
            </div> 
        </div>
    )
}

export default Cart