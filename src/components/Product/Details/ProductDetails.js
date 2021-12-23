import React, { useState, useEffect } from 'react'
import {  Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as productService from '../../../services/productService';
import * as categoriesService from '../../../services/categoriesService';
import { addToCart  } from '../../../cartReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "../../../contexts/CartContext";
import './ProductDetails.css';

const ProductDetails = () => {

    let params = useParams();
    let thisProductId = params.id;
    const [product, setProduct] = useState({});
    const [productCategory, setProductCategory] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { cart, dispatch } = useCart();

    useEffect(() => {
        productService.getOne(thisProductId)
        .then(result => {
            setProduct(result);

            categoriesService.getOne(result.category)
            .then(result => {
                setProductCategory(result);
            })   
            .catch(err => {
                console.log(err);
            })
        })    
    }, []);


    const increaseQuantityHandler = () => {
        let count = quantity;
        count = count + 1;

        if (count > parseInt(product.quantity)) {
            setErrorMessage('Няма достатъчно наличност');
        }  else {
            
        }

        setQuantity(count);
    };

    const decreaseQuantityHandler = () => {
        let count = quantity;
        if (count > 1) {
            count = count - 1;

            if (count == parseInt(product.quantity) || count < parseInt(product.quantity)) {
                setErrorMessage('')
            } 
        }

        setQuantity(count);
    };

    const financial = (price) => {
        return Number.parseFloat(price).toFixed(2);
      }

    const addToCartHandler = () => {
        dispatch(addToCart({
            id: thisProductId,
            name: product.name,
            image: product.image,
            price: financial(product.price),
            salePrice: product.salePrice.length ? financial(product.salePrice) : null,
            quantity: quantity
        }));    

        setSuccessMessage('Продукта е успешно в количката')
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000)
    };

    return (
        <div className="product-details-component">
            <Helmet>
                <title>{product.name}</title>
            </Helmet>

            <section className="page-title centred" style={{backgroundImage: `url("/images/background/page-title.jpg")`}}>
                <div className="auto-container">
                <div className="content-box">
                    <div className="title">
                        <h1>Детайлна информация</h1>
                    </div>
                    <ul className="bread-crumb clearfix">
                        <li><Link to='/'>Начало</Link></li>
                        <li><Link to='/products'>Продукти</Link></li>
                        <li>{productCategory.name}</li>
                    </ul>
                </div>
                </div>
            </section>

            <section className="shop-details border-bottom">
                <div className="auto-container">
                    <div className="product-details-content">
                        <div className="row align-items-center clearfix">
                            <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                                <div className="slider-inner">
                                    <div className="bxslider">
                                        <div className="slider-content">
                                            <div className="product-image">
                                                <figure className="image">
                                                    <img src={product.image} alt={product.name} />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                                <div className="product-details">
                                    <h2>{product.name}</h2>
                                    {product.salePrice
                                        ? <span className="price">
                                            <span className="sale-price">{product.salePrice}лв.</span> <span className="old-price">{product.price}лв.</span>
                                        </span> 
                                        : <span className="price">{product.price}лв.</span>
                                    }
                                    <div className="addto-cart-box"> 
                                        {successMessage && <Link to="/checkout"><div className="success-message">
                                                            <div>{successMessage}</div>
                                                        </div>
                                        </Link>}
                                        {errorMessage && <div className="error-message"><div>{errorMessage}</div></div>}
                                        <ul className="clearfix">
                                            <li className="item-quantity">
                                                <div className="button-quantity decrease-button" onClick={decreaseQuantityHandler}><FontAwesomeIcon icon={faMinus} /></div>
                                                <input className="quantity-spinner" type="text" value={quantity} name="quantity" />
                                                <div className="button-quantity increase-button"  onClick={increaseQuantityHandler}><FontAwesomeIcon icon={faPlus} /></div>
                                            </li>
                                            <li><button type="button" className="theme-btn-two" onClick={addToCartHandler}>Добави в количката</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-discription">
                        <div className="tabs-box">
                            <div className="tab-btn-box">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li className="tab-btn active-btn" data-tab="#tab-1">Описание</li>
                                </ul>
                            </div>
                            <div className="tabs-content">
                                <div className="tab active-tab" id="tab-1">
                                    <div className="content-box">
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default ProductDetails