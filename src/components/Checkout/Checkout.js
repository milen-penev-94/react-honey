import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartProvider";
import { useAuth } from "../../contexts/AuthContext"
import { clearCart  } from "../../cartReducer";
import * as orderService from "../../services/orderService";
import { useNavigate, useParams } from "react-router-dom"
import './Checkout.css'

const Checkout = () => {

  const { cart, dispatch } = useContext(CartContext);
  const { currentUser, currentUserData } = useAuth({})
  const [successMessage, setSuccessMessage] = useState()
  const [errorMessage, setErrorMessage] = useState([])
  const navigate = useNavigate()

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    let form = e.currentTarget
    let formData = new FormData(e.currentTarget);
    let {email, phone, name, lastName, city, address, paymentMethod} = Object.fromEntries(formData)

    let errors = [];

    if (!validateEmail(email)) {
      errors.push('Имеила е невалиден')
    }

    if (phone.length < 5) {
      errors.push('Телефона трябва да е повече от 5 символа')
    } else {
      if (isNaN(phone)) {
        errors.push('Телефона трябва да само цифри')
      }
    }

    if (name.length < 3) {
      errors.push('Името не може да е по-малко от 3 символа')
    }

    if (name.length < 3) {
        errors.push('Името не може да е по-малко от 3 символа')
    }

    if (lastName.length < 3) {
        errors.push('Фамилията не може да е по-малко от 3 символа')
    }

    if (city.length < 3) {
      errors.push('Града не може да е по-малко от 3 символа')
    }

    if (address.length < 3) {
      errors.push('Адреса не може да е по-малко от 3 символа')
    }

    if (errors.length > 0) {
      setErrorMessage(errors)  
    } else {
      
      setErrorMessage([])  

      let total = 0
      let orderedProducts = { };
      cart.forEach(cartItem => {
        orderedProducts[cartItem.id] = cartItem.quantity;

        if (cartItem.salePrice < (cartItem.price)) {
          total = total + (parseFloat(cartItem.salePrice) * parseInt(cartItem.quantity))
        } else {
          total = total + (parseFloat(cartItem.price) * parseInt(cartItem.quantity))
        }
      })
      
      let newOrder = {email, phone, name, lastName, city, address, paymentMethod, total, orderedProducts}
      orderService.save(newOrder)
      .then(result => {
        if(result) {
            form.reset()
            setErrorMessage("")
            dispatch(clearCart());
            navigate('/success-page')
        } else {
            //TODO: 
        }
      }) 
    }
  }

  return (

    <div className="checkout-component">
      <section className="page-title centred" style={{backgroundImage: `url("/images/background/page-title.jpg")`}}>
        <div className="auto-container">
          <div className="content-box">
            <div className="title">
              <h1>Завършете поръчката</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="auto-container">
        <form onSubmit={handleSubmit}>

          {successMessage && <div className="success-message">{successMessage}</div>}
          <div className={(errorMessage.length > 0) ? 'error-message' : null}>
            { (errorMessage.length > 0) ? errorMessage.map((error) =>
                <div>{error}</div>
            ) : null}
          </div>

          <div>
            <h4>Попълнете вашите данни</h4>
          </div>
          <div className="two-column">
            <label htmlFor="email">Имеил: </label>
            <input type="email" name="email" defaultValue={currentUser && currentUser.email} />
          </div>
          
          <div className="two-column">
            <label htmlFor="phone">Телефон: </label>
            <input name="phone" id="phone" type="text"  defaultValue={currentUserData.phone}/>
          </div>

          <div className="two-column">
            <label htmlFor="name">Име: </label>
            <input name="name" id="name" type="text"  defaultValue={currentUserData.name}/>
          </div>

          <div className="two-column">
            <label htmlFor="lastName">Фамилия:</label>
            <input name="lastName" id="lastName" type="text"  defaultValue={currentUserData.lastName}/>
          </div>

          <div className="two-column">
            <label htmlFor="city">Град:</label>
            <input name="city" id="city" type="text"  defaultValue={currentUserData.city}/>
          </div>

          <div className="two-column">
              <label htmlFor="address">Адрес:</label>
              <input name="address" id="address" type="text"  defaultValue={currentUserData.address}/>
          </div>

          <div>
            <h4>Начин на плащане</h4>
          </div>
          <div className="two-column">
            <input type="radio" id="paymentMethod" name="paymentMethod" value="1" defaultChecked /> 
            <label htmlFor="paymentMethod" className="radio-label">Наложен латеж</label>
          </div>

          <div><button type="submit">Поръчай</button></div>
        </form>

      </div>
    </div>
  )
}

export default Checkout