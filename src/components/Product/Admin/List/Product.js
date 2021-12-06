import React, { useState, useEffect } from "react"
import * as productService from '../../../../services/productService';
import { Link } from "react-router-dom"
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheckSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, onChange}) => {

    const removeProduct = (e) => {
        let productId = e.currentTarget.getAttribute('data-product-id')
        productService.remove(productId)
        .then(result => {
            onChange(true);
        })  
     }

    return (
        <>
            <span className="name">{product.name}</span>
            <div className="actions">
                <span className="status">{(product.isEnabled === '1' ? <FontAwesomeIcon icon={faCheckSquare} className="enabled" /> : <FontAwesomeIcon icon={faWindowClose} className="disabled" />)} </span>
                <Link to={`/admin/update-product/${product.docId}`} className="edit"><FontAwesomeIcon icon={faEdit} />  </Link> 
                <span className="delete" onClick={removeProduct} data-product-id={product.docId}><FontAwesomeIcon icon={faTrash} /></span>
            </div>
        </>
    )
}
export default Product;