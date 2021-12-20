import React, { useState, useEffect } from 'react';
import * as productService from '../../../../../services/productService';
import './OrderedProducts.css';

const OrderedProducts = ({order}) => {

    const [orderedProducts, setOrderedProducts] = useState([]);

    useEffect(() => {
        if(order.orderedProducts){
            for (const [orderedProductId, orderedProuctQuantity] of Object.entries(order.orderedProducts)) {
                productService.getOne(orderedProductId)
                .then(product => {
                    setOrderedProducts(s => 
                        [...s, { docId: orderedProductId, sku: product.sku, name: product.name, image: product.image, quantity: orderedProuctQuantity }])
                }) 
                .catch(err => {
                    console.log(err);
                })              
            } 
        } 
    }, [order]);

    return(
        <div className="ordered-products-component">
            <span className="title">Поръчани продукти: </span>

            <table className="table ordered-products">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Изображение</th>
                        <th scope="col">SKU</th>
                        <th scope="col">Име</th>
                        <th scope="col">Количество</th>
                    </tr>
                </thead>
                <tbody>
                { orderedProducts.map((orderedProduct) => 
                     <tr key={orderedProduct.docId} className="ordered-product">
                        <th><img src={orderedProduct.image} className="image" alt={orderedProduct.name} /></th>
                        <th>{orderedProduct.sku}</th>
                        <th>{orderedProduct.name}</th>
                        <th>{orderedProduct.quantity} </th>
                    </tr>  
                )}
                </tbody>
            </table>
        </div>
    )
}

export default OrderedProducts;