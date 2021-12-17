
import React, { useState, useEffect } from 'react';
import * as productService from '../../../services/productService';
import './ProfileOrder.css';

const PofileOrder = ({order}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        for (const [orderedProductId, orderedProuctQuantity] of Object.entries(order.orderedProducts)) {
            productService.getOne(orderedProductId)
            .then(product => {
                setProducts(s => 
                    [...s, {name: product.name, image: product.image, sku: product.sku, quantity: orderedProuctQuantity}])
            }) 
            .catch(err => {
                console.log(err);
            })              
        } 
    }, []);

    return (
        <div className="profile-order-component">

            <span className="order-number">№: {order.orderNumber}</span>  
            <span className="info-text">Дата на поръчката: {order.orderDate}</span>    
            <span className="info-text">Поръчани продукти: </span>   

            <ul className="ordered-products">
                { products.map(orderedProduct => 
                <li className="ordered-product" key={orderedProduct.sku} >
                    <img src={orderedProduct.image} className="image" />
                    <span>{orderedProduct.name}</span>
                    <span>№: {orderedProduct.sku}</span>
                    <span>Количество: {orderedProduct.quantity}</span>
                </li>
                )}
            </ul>
            
    
        </div>
    )
}

export default PofileOrder;