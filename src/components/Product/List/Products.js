import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import * as productService from '../../../services/productService';
import Product from './Product.js';
import Categories from '../../Category/List/Categories';
import './Products.css';

const Products = () => {
    const params = useParams();
    const [allProducts, setAllProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const navigate = useNavigate();

    const productsPerPage = 9;
    const pagesVisited = pageNumber * productsPerPage;

    useEffect(() => {
   
        productService.getAllEnabled()
        .then(result => {
            setAllProducts(result);
        })  
        .catch(err => {
            console.log(err);
        })
        
    }, []);
    
    useEffect(() => {        
        if (params.id)  {
            setPageNumber(parseInt(params.id) - 1)
        } else {
            setPageNumber(0);
        }
    }, [pageNumber]);

    const displayAllProducts = allProducts 
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
             
        return (
            <Product key={product.docId} product={product} /> 
        );
    });

    const pageCount = Math.ceil(allProducts.length / productsPerPage);
    if (pageCount > 0 && pageCount < params.id) {
        navigate('/404');
    }

    const changePage = ({ selected }) => {
        const pageNumber =  (selected + 1)
        if (pageNumber == 1) {
            navigate('/products');
        } else {
            navigate('/products/' + pageNumber);
        }
      setPageNumber(selected);
    };

    return (
        <div className="list-products-component ">
            <Helmet>
                <title>Продукти</title>
            </Helmet>

            <section className="page-title centred" style={{backgroundImage: `url("/images/background/page-title.jpg")`}}>
                <div className="auto-container">
                <div className="content-box">
                    <div className="title">
                    <h1>Продукти</h1>
                    </div>
                </div>
                </div>
            </section>

            <section className="shop-page-section">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                                <div className="shop-sidebar">
                                    {<Categories />}
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                                <div className="our-shop">
                                    <div className="item-shorting clearfix">
                                        <div className="text pull-left">
                                            <p>Общо { allProducts.length} продукта</p>
                                        </div>
                                    </div>
                                    <div className="row clearfix centred">
                                        {displayAllProducts}
                                        <div className="pagination-wrapper">
                                            <ReactPaginate
                                                previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                                                nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                                                pageCount={pageCount}
                                                onPageChange={changePage}
                                                containerClassName={"pagination centred"}
                                                previousLinkClassName={"previousBttn"}
                                                nextLinkClassName={"nextBttn"}
                                                disabledClassName={"paginationDisabled"}
                                                activeClassName={"current"}
                                                initialPage={params.id ? (parseInt(params.id) - 1) : 0}
                                            />
                                        </div>
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