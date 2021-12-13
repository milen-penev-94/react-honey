import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as orderService from '../../../../services/orderService';
import DeleteConfirmDialog from '../../../Common/DeleteConfirmDialog/DeleteConfirmDialog';
import './Orders.css';

const Product = ({order, onChange}) => {

    const[orderId, setOrderId] = useState()
    const[showDeleteDialog, setShowDeleteDialog] = useState(false);

    const deleteProduct = (e) => {
        e.preventDefault();

        orderService.remove(orderId)
        .then(result => {
            onChange(true);
        })  
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setShowDeleteDialog(false);
        });
     }

     const deleteClickHandler = (e) => {
        e.preventDefault();
        setOrderId(e.currentTarget.getAttribute('data-order-id'))
        setShowDeleteDialog(true);
     }

     const closeEventHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(false);
     }

     function quantityProducts() {

       let quantity = 0
       Object.values(order.orderedProducts)
       .map((productQuantity) => {
            quantity = quantity + productQuantity
       })

       return quantity
     }

    return (
        <>
            <DeleteConfirmDialog show={showDeleteDialog} onClose={closeEventHandler} onDelete={deleteProduct} />
            <span className="date">Дата: {order.orderDate}</span>
            <span className="quantity">Брой: { quantityProducts() } </span>
            <span className="status">Статус: {order.status} </span>
            
            <div className="actions">
                <Link to={`/admin/update-order/${order.docId}`} className="edit"><FontAwesomeIcon icon={faEdit} />  </Link> 
                <span className="delete" onClick={deleteClickHandler} data-order-id={order.docId}><FontAwesomeIcon icon={faTrash} /></span>
            </div>
        </>
    )
}
export default Product;