import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext'
import { clearCart  } from '../../cartReducer';
import * as orderService from '../../services/orderService';
import useDateNow from '../../hooks/useDateNowState';
import Cart from '../Cart/Cart'
import './Checkout.css'

const Checkout = () => {

  const { cart, dispatch } = useCart();
  const { currentUser, currentUserData } = useAuth({})
  const [successMessage, setSuccessMessage] = useState()
  const [errorMessage, setErrorMessage] = useState([])
  const [dateNow, setDateNow] = useDateNow(new Date());
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
    setDateNow(new Date())

    let form = e.currentTarget
    let formData = new FormData(e.currentTarget);
    let {email, phone, name, lastName, city, address, paymentMethod} = Object.fromEntries(formData)
    let status = 'NEW'
    let orderDate = dateNow
    let orderNumber = uuid();

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
      
      let newOrder = {email, phone, name, lastName, city, address, paymentMethod, total, orderedProducts, status, orderDate}
      orderService.save(newOrder)
      .then(result => {
          form.reset()
          setErrorMessage("")
          navigate(`/checkout/success/${orderNumber}`)
          dispatch(clearCart());
      }) 
      .catch(err => {
        console.log(err);
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

      <div className="auto-container row">
        <form onSubmit={handleSubmit} className="col-lg-8 col-md-12 col-sm-12">
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

     
          <div className="two-column">
            <h4>Начин на плащане</h4>
            <input type="radio" id="paymentMethod" name="paymentMethod" value="1" defaultChecked /> 
            <label htmlFor="paymentMethod" className="radio-label">Наложен латеж</label>
          </div>

          <div className="two-column delivery-method">
            <h4>Начин на доставка</h4>
            <p>Продуктите се доставят на посоченият от вас адрес с фирма Еконт. Цената на доставка е 4.90лв.</p>
          </div>
          <div><button type="submit">Поръчай</button></div>
        </form>

        {<Cart />}

      </div>
    </div>
  )
}

export default Checkout