import React, { useState, useEffect } from "react"
import {  Link, useParams } from "react-router-dom"
import * as productService from '../../../services/productService';
import * as categoriesService from '../../../services/categoriesService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './ProductDetails.css'

const ProductDetails = () => {

    let params = useParams()
    let thisProductId = params.id
    const [product, setProduct] = useState({})
    const [productCategory, setProductCategory] = useState({})

    useEffect(() => {
        productService.getOne(thisProductId)
        .then(result => {
            setProduct(result)

            categoriesService.getOne(result.category)
            .then(result => {
                setProductCategory(result)
            })   
        })    
    }, []);

    return (
        <div className="product-details-component">
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
                                        <ul className="clearfix">
                                            <li className="item-quantity">
                                                <div className="button-quantity decrease-button"><FontAwesomeIcon icon={faMinus} /></div>
                                                <input className="quantity-spinner" type="text" defaultValue="1" name="quantity" />
                                                <div className="button-quantity increase-button"><FontAwesomeIcon icon={faPlus} /></div>
                                            </li>
                                            <li><button type="button" className="theme-btn-two">Добави в количката</button></li>
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