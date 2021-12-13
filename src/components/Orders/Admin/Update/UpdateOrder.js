import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import * as orderService from '../../../../services/orderService';
import * as productService from '../../../../services/productService';

const UpdateOrder = () => {
    const params = useParams();
    const thisOrderId = params.id;
    const [order, setOrder] = useState({});
    const [orderedProducts, setOrderedProducts] = useState([]);
    const [updateForm, setUpdateForm] = useState(false);
    
    const statuses = [
        { value: 'NEW', text: 'Нова' },
        { value: 'PROCESSING', text: 'В обработка' },
        { value: 'CANCELED', text: 'Отказана' },
        { value: 'COMPLETED', text: 'Завършена' },
    ]

    useEffect(() => {

        orderService.getOne(thisOrderId)
        .then(result => {
            setOrder(result);
            
            for (const [orderedProductId, orderedProuctQuantity] of Object.entries(result.orderedProducts)) {
                productService.getOne(orderedProductId)
                .then(product => {
                    setOrderedProducts(s => 
                        [...s, { docId: product.docId, sku: product.sku, name: product.name, quantity: orderedProuctQuantity }])
                }) 
                .catch(err => {
                    console.log(err);
                })              
              }
        })   
        .catch(err => {
            console.log(err);
        })
       
    }, [updateForm]);


    const handleSubmit = async (e) => {

        e.preventDefault(); 
    }

    return (
        <div className="update-order-component auto-container">

            <Link to="/admin/orders" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с поръчки</span>
            </Link>

            <h2>Поръчка: {order.orderNumber}</h2>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="status">Статус: </label>
                        <select id="status" name="status" value={order.status} onChange={(e) => setOrder(s => ({...s, status: e.target.value}))}>
                            {statuses.map(status => <option key={status.value} value={status.value}>{status.text}</option>)}
                        </select>
                    </div>   

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="total">Сума: </label>
                        <input id="total" name="total" type="text" defaultValue={order.total} />
                    </div> 
                </div>
                
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="email">Имеил: </label>
                        <input id="email" name="email" type="text" defaultValue={order.email} />
                    </div> 

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="phone">Телефон: </label>
                        <input id="phone" name="phone" type="text" defaultValue={order.phone} />
                    </div> 
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="name">Име: </label>
                        <input id="name" name="name" type="text" defaultValue={order.name} />
                    </div> 

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="lastName">Фамилия: </label>
                        <input id="lastName" name="lastName" type="text" defaultValue={order.lastName} />
                    </div> 
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="city">Населено място: </label>
                        <input id="city" name="city" type="text" defaultValue={order.city} />
                    </div> 
                </div>

                <div>
                    <button type="submit">Запази</button>
                </div>
            </form>

            <div className="products">
                <ul>
                    { orderedProducts.map((orderedProduct) => 
                        <li key={orderedProduct.docId}>
                            ID: {orderedProduct.docId}
                            SKU: {orderedProduct.sku}
                            Продукт: {orderedProduct.name}, 
                            Количество: {orderedProduct.quantity} 
                        </li>  
                    )}
                 </ul>
            </div>
        </div>
    )
}

export default UpdateOrder;