
import React, { useState, useEffect } from 'react';
import * as productService from '../../../services/productService';

const PofileOrder = ({order}) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        for (const [orderedProductId, orderedProuctQuantity] of Object.entries(products)) {
            productService.getOne(orderedProductId)
            .then(product => {
                setProducts(s => 
                    [...s, product])
            }) 
            .catch(err => {
                console.log(err);
            })              
        } 
    }, []);
    

    return (
        <ul>
        Поръчани продукти:
        { products.map((orderedProduct) => 
            <li key={orderedProduct.docId} className="ordered-product">
               <img src={orderedProduct.image} className="image" />
                {orderedProduct.sku}
                {orderedProduct.name}
                {orderedProduct.quantity} 
            </li>  
        )}
        </ul>
    )
}

export default PofileOrder;