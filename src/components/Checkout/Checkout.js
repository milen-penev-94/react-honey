import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext'
import { clearCart  } from '../../cartReducer';
import * as orderService from '../../services/orderService';
import { validateCheckout } from './helper/formValidationHelper';
import useDateNow from '../../hooks/useDateNowState';
import Cart from '../Cart/Cart'
import './Checkout.css'

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const { currentUser, currentUserData } = useAuth({})
  const initialValues = { email:"", userId: "", phone: currentUserData.phone, name: "", lastName: "", city: "", address: "", paymentMethod: "1", userId: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [dateNow, setDateNow] = useDateNow(new Date());
  const navigate = useNavigate();

  /* Set data when user is logged */
  useEffect(() => { 

    if (currentUser) {

      if (Object.keys(currentUser).length !== 0) {
        setFormValues({ 
          ...formValues, 
          email: currentUser.email, 
          userId: currentUser.uid
        });
      }
  
      if (Object.keys(currentUserData).length !== 0) {
        setFormValues({ 
          ...formValues, 
          name: currentUserData.name, 
          lastName: currentUserData.lastName, 
          phone: currentUserData.phone, 
          city: currentUserData.city, 
          address: currentUserData.address,
        });
      }
    }
   }, [currentUser, currentUserData]);

   /* Check for errors and write to the database */
  useEffect(() => {
    
      if (Object.keys(formErrors).length === 0 && isSubmit) {
          setDateNow(new Date())  
          let orderNumber = uuid();
          let total = 0;
          let orderedProducts = { };
          cart.forEach(cartItem => {
            orderedProducts[cartItem.id] = cartItem.quantity;

            if (parseFloat(cartItem.salePrice) < parseFloat(cartItem.price)) {
              total = total + (cartItem.salePrice * cartItem.quantity)
            } else {
              total = total + (cartItem.price * cartItem.quantity)
            }
          })

          let finalFormValues = Object.assign(formValues, 
            {orderDate: dateNow}, 
            {orderNumber: orderNumber}, 
            {orderedProducts: orderedProducts}, 
            {total: total},
            {status: 'NEW'}
          );
          orderService.save(finalFormValues)
          .then(result => {
              navigate(`/checkout/success/${orderNumber}`)
              dispatch(clearCart());
          
          })   
          .catch(err => {
              console.log(err);
          })
      }
  }, [formErrors]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validateCheckout(formValues));
      setIsSubmit(true);

      if ( Object.keys(formErrors).length === 0 ) {
          e.currentTarget.reset();
      }
  };
 
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

          <div>
            <h4>Попълнете вашите данни</h4>
          </div>

          <div className="row">    
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="email">Имеил: </label>
              <input type="text" name="email" defaultValue={currentUser && currentUser.email} onBlur={handleChange} />
              <p className="error-message">{formErrors.email}</p>
            </div>
          
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="phone">Телефон: </label>
              <input name="phone" id="phone" type="text"  defaultValue={currentUserData.phone} onBlur={handleChange}/>
              <p className="error-message">{formErrors.phone}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="name">Име: </label>
              <input name="name" id="name" type="text"  defaultValue={currentUserData.name} onBlur={handleChange}/>
              <p className="error-message">{formErrors.name}</p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="lastName">Фамилия:</label>
              <input name="lastName" id="lastName" type="text"  defaultValue={currentUserData.lastName} onBlur={handleChange}/>
              <p className="error-message">{formErrors.lastName}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <label htmlFor="city">Населено място:</label>
              <input name="city" id="city" type="text"  defaultValue={currentUserData.city} onBlur={handleChange}/>
              <p className="error-message">{formErrors.city}</p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="address">Адрес:</label>
                <input name="address" id="address" type="text"  defaultValue={currentUserData.address} onBlur={handleChange}/>
                <p className="error-message">{formErrors.address}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h4>Начин на плащане</h4>
              <input type="radio" id="paymentMethod" name="paymentMethod" value="1" defaultChecked  onBlur={handleChange}/> 
              <label htmlFor="paymentMethod" className="radio-label">Наложен латеж</label>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 delivery-method">
              <h4>Начин на доставка</h4>
              <p>Продуктите се доставят на посоченият от вас адрес с фирма Еконт. Цената на доставка е 4.90лв.</p>
              </div>
              <div><button type="submit">Поръчай</button>
            </div>
          </div>
        </form>

        {<Cart />}

      </div>
    </div>
  )
}

export default Checkout