import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import * as orderService from '../../../../services/orderService';
import { validateUpdateOrder } from './helper/formValidationHelper';
import OrderedProducts from './OrderedProducts/OrderedProducts'
import './UpdateOrder.css'

const UpdateOrder = () => {
    const params = useParams();
    const thisOrderId = params.id;
    const initialValues = {name: "", lastName:"", email: "",  phone: "", total: "", city: "", address: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [order, setOrder] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [updateForm, setUpdateForm] = useState(false);
    
    const statuses = [
        { value: 'NEW', text: 'Нова' },
        { value: 'PROCESSING', text: 'В обработка' },
        { value: 'CANCELED', text: 'Отказана' },
        { value: 'COMPLETED', text: 'Завършена' },
    ]

    /* Get order on ID */
    useEffect(() => {

        orderService.getOne(thisOrderId)
        .then(result => {
            setOrder(result);
        })   
        .catch(err => {
            console.log(err);
        })
       
    }, [updateForm]);

    /* Set data in order */
    useEffect(() => { 
        if (Object.keys(order).length !== 0) {
            setFormValues({ 
            ...formValues, 
            name: order.name, 
            lastName: order.lastName, 
            phone: order.phone, 
            city: order.city, 
            address: order.address,
            email: order.email,
            address: order.address,
            total: order.total
        });
    }
    }, [order]);

    useEffect(() => {
       
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            orderService.update(formValues, thisOrderId)
            .then(result => {
                setSuccessMessage('Поръчката е успешно редактирана');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 2000);
            
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
        setFormErrors(validateUpdateOrder(formValues));
        setIsSubmit(true);
    };

    return (
        <div className="update-order-component auto-container">

            <Link to="/admin/orders" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с поръчки</span>
            </Link>

            <h2>№ {order.orderNumber}</h2>
            <h5>Дата и час на поръчката: {order.orderDate}</h5>

            {successMessage && <div className="success-message">{successMessage}</div>}    

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="status">Статус: </label>
                        <select id="status" name="status" value={order.status} onChange={(e) => setOrder(s => ({...s, status: e.target.value}))} onBlur={handleChange}>
                            {statuses.map(status => <option key={status.value} value={status.value}>{status.text}</option>)}
                        </select>
                    </div>   

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="total">Сума: </label>
                        <input id="total" name="total" type="text" defaultValue={order.total} onBlur={handleChange} />
                        <p className="error-message">{formErrors.total}</p>
                    </div> 
                </div>
                
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="email">Имеил: </label>
                        <input id="email" name="email" type="text" defaultValue={order.email} onBlur={handleChange} />
                        <p className="error-message">{formErrors.email}</p>
                    </div> 

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="phone">Телефон: </label>
                        <input id="phone" name="phone" type="text" defaultValue={order.phone} onBlur={handleChange} />
                        <p className="error-message">{formErrors.phone}</p>
                    </div> 
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="name">Име: </label>
                        <input id="name" name="name" type="text" defaultValue={order.name} onBlur={handleChange} />
                        <p className="error-message">{formErrors.name}</p>
                    </div> 

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="lastName">Фамилия: </label>
                        <input id="lastName" name="lastName" type="text" defaultValue={order.lastName} onBlur={handleChange} />
                        <p className="error-message">{formErrors.lastName}</p>
                    </div> 
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="city">Населено място: </label>
                        <input id="city" name="city" type="text" defaultValue={order.city} onBlur={handleChange} />
                        <p className="error-message">{formErrors.city}</p>
                    </div> 
                </div>

                <div>
                    <button type="submit">Запази</button>
                </div>
            </form>

            <OrderedProducts order={order} />
        </div>
    )
}

export default UpdateOrder;