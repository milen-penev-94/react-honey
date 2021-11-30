import React, { useState, useEffect } from "react"
import * as productService from '../../../../services/productService';
import { Link } from "react-router-dom"
import './ListProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import ListProduct from "./ListProduct";

const ListProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(false);

    useEffect(() => {
        setDeleteProduct(false)

        productService.getAll()
        .then(result => {
            setAllProducts(result);
        })  
    }, [deleteProduct]);

    function changeDeteleProduct(newValue) {
        setDeleteProduct(newValue)
    }

    return (
        <div className="list-products-component">

            <Link to="/profile" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към профила</span>
            </Link>
            
            <Link to="/admin/add-product" className="add-category profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faPlusSquare} /></span>
                <span className="label">Добави продукт</span>
            </Link>

            <h2>Продукти</h2>

            {allProducts.length > 0
                ? (
                    <ul className="products-list">
                        {allProducts.map(x => 
                        <li className="product" key={x.docId}>
                            <ListProduct product={x} deleteProduct={deleteProduct} onChange={changeDeteleProduct} />
                        </li>
                        )}
                    </ul>
                ) 
                : <p className="no-data">Няма налични продукти в базата с данни!</p>
            }
    </div>
    )
}

export default ListProducts