import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import * as productService from '../../../services/productService';
import Product from '../../Product/List/Product';
import Categories from './Categories';
import './Category.css';

const Category = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const navigate = useNavigate();

    const productsPerPage = 3;
    const pagesVisited = pageNumber * productsPerPage;

    useEffect(() => {
   
        productService.getAllEnabledProductWithCat(params.id)
        .then(result => {
            setProducts(result);
        })  
        .catch(err => {
            console.log(err);
        })
        
    }, [params.id]);

    useEffect(() => {        
        if (params.id)  {
            setPageNumber(parseInt(params.page) - 1)
        } else {
            setPageNumber(0);
        }
    }, [pageNumber]);


    const displayAllProducts = products 
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
        console.log(product);
        return (
            <Product key={product.docId} product={product} /> 
        );
    });

    const pageCount = Math.ceil(products.length / productsPerPage);
    if (pageCount > 0 && pageCount < params.id) {
        navigate('/404');
    }

    const changePage = ({ selected }) => {
        const pageNumber =  (selected + 1)
        if (pageNumber == 1) {
            navigate('/category/' + params.id + '/1');
        } else {
            navigate('/category/'+ params.id + '/' + pageNumber);
        }
      setPageNumber(selected);
    };
    
    return (
        <div className="list-products-category-component">
            <Helmet>
                <title>Продукти от катефория</title>
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
                                            <p>Общо:  {  products.length} продукти</p>
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

export default Category