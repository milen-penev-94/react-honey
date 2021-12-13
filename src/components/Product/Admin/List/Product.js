import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheckSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import * as productService from '../../../../services/productService';
import DeleteConfirmDialog from '../../../Common/DeleteConfirmDialog/DeleteConfirmDialog';
import './Products.css';

const Product = ({product, onChange}) => {

    const[productId, setProductId] = useState()
    const[showDeleteDialog, setShowDeleteDialog] = useState(false);

    const deleteProduct = (e) => {
        e.preventDefault();

        productService.remove(productId)
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
        setProductId(product.docId)
        setShowDeleteDialog(true);
     }

     const closeEventHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(false);
     }

    return (
        <>
            <DeleteConfirmDialog show={showDeleteDialog} onClose={closeEventHandler} onDelete={deleteProduct} />
            <span className="name">{product.name}</span>
            <div className="actions">
                <span className="status">{(product.isEnabled === '1' ? <FontAwesomeIcon icon={faCheckSquare} className="enabled" /> : <FontAwesomeIcon icon={faWindowClose} className="disabled" />)} </span>
                <Link to={`/admin/update-product/${product.docId}`} className="edit"><FontAwesomeIcon icon={faEdit} />  </Link> 
                <span className="delete" onClick={deleteClickHandler}><FontAwesomeIcon icon={faTrash} /></span>
            </div>
        </>
    )
}
export default Product;