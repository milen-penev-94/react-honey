import React, { useState, useEffect } from "react"
import * as productService from '../../../services/productService';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Product from './Product.js'
import ReactPaginate from "react-paginate";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const productsPerPage = 2;
    const pagesVisited = pageNumber * productsPerPage;

    useEffect(() => {

        productService.getAllEnabled()
        .then(result => {
            setAllProducts(result);
        })  
    }, []);

    const displayAllProducts = allProducts
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
        return (
            <Product key={product.docId} product={product} /> 
        );
    });

    const pageCount = Math.ceil(allProducts.length / productsPerPage);
    const changePage = ({ selected }) => {
     setPageNumber(selected);
    };
    
//     return (   
//     <div>
//         {displayAllProducts}
//         <ReactPaginate
//             previousLabel={"Previous"}
//             nextLabel={"Next"}
//             pageCount={pageCount}
//             onPageChange={changePage}
//             containerClassName={"paginationBttns"}
//             previousLinkClassName={"previousBttn"}
//             nextLinkClassName={"nextBttn"}
//             disabledClassName={"paginationDisabled"}
//             activeClassName={"paginationActive"}
//         />
//     </div>
//   )

    return (
        <div className="list-products-component">


        <section className="shop-page-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="shop-sidebar">
                                <div className="sidebar-search">
                                    <form action="http://azim.commonsupport.com/Hanta/shop.html" method="post" className="search-form">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search here" required="" />
                                            <button type="submit"><i className="far fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h4>Product Category</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li><a href="shop-details.html">Honey & Sweets</a></li>
                                            <li><a href="shop-details.html">Forest Honey</a></li>
                                            <li><a href="shop-details.html">Beekeeping</a></li>
                                            <li><a href="shop-details.html">Honeycomb</a></li>
                                            <li><a href="shop-details.html">Natural Honey</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                        <h4>Popular Product</h4>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <figure className="post-thumb">
                                                <a href="shop-details.html">
                                                 <img src="assets/images/resource/shop/post-1.png" alt=""/></a>
                                                </figure>
                                            <ul className="rating clearfix">
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                            <h5><a href="shop-details.html">Special honeycomb</a></h5>
                                            <span className="price">$25.99</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><a href="shop-details.html"><img src="assets/images/resource/shop/post-2.png" alt="" /></a></figure>
                                            <ul className="rating clearfix">
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                            <h5><a href="shop-details.html">fresh forest honey</a></h5>
                                            <span className="price">$30.99</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><a href="shop-details.html"><img src="assets/images/resource/shop/post-3.png" alt=""/></a></figure>
                                            <ul className="rating clearfix">
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                            <h5><a href="shop-details.html">beekeeping honey</a></h5>
                                            <span className="price">$33.99</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget price-filter">
                                    <div className="widget-title">
                                        <h4>filter by price</h4>
                                    </div>
                                    <div className="range-slider clearfix">
                                        <div className="clearfix">
                                            <p>Range:</p>
                                            <div className="title"></div>
                                            <div className="input"><input type="text" className="property-amount" name="field-name" readonly /></div>
                                        </div>
                                        <div className="price-range-slider"></div>
                                    </div>
                                </div>
                                <div className="advice-box centred">
                                    <div className="inner">
                                        <p>honeycom</p>
                                        <h2>forest honey</h2>
                                        <div className="btn-box"><a href="shop.html">shop now</a></div>
                                        <figure className="image"><img src="assets/images/resource/honey-3.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="our-shop">
                                <div className="item-shorting clearfix">
                                    <div className="text pull-left">
                                        <p>Showing 1–12 of 14 results</p>
                                    </div>
                                    <div className="short-box pull-right">
                                        <div className="select-box">
                                            <select className="wide">
                                               <option data-display="Default Type">Default Type</option>
                                               <option value="1">Default Short 1</option>
                                               <option value="2">Default Short 2</option>
                                               <option value="3">Default Short 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix centred">

                                {displayAllProducts}
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                                </div>
                                <div className="pagination-wrapper">
                                    <ul className="pagination centred">
                                        <li><a href="shop.html"><i className="far fa-arrow-left"></i></a></li>
                                        <li><a href="shop.html" className="current">01</a></li>
                                        <li><a href="shop.html">02</a></li>
                                        <li><a href="shop.html">03</a></li>
                                        <li><a href="shop.html"><i className="far fa-arrow-right"></i></a></li>
                                    </ul>
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

export default Products