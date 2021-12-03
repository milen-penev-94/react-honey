import React, { useState, useEffect } from "react"
import * as productService from '../../../services/productService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Product from './Product.js'
import Categories from '../../Category/List/Categories'
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom"
import './Products.css'

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const navigate = useNavigate()
    const params = useParams()

    const productsPerPage = 3;
    const pagesVisited = pageNumber * productsPerPage;

    useEffect(() => {
        productService.getAllEnabled()
        .then(result => {
            setAllProducts(result);
        })  
    }, []);

    useEffect(() => {        
        if (params.id)  {
            setPageNumber(parseInt(params.id) - 1)
        } else {
            setPageNumber(0)
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
        navigate('/404')
    }

    const allProductsCount = allProducts.length

    const changePage = ({ selected }) => {
        const pageNumber =  (selected + 1)
        if (pageNumber == 1) {
            navigate('/products')
        } else {
            navigate('/products/' + pageNumber)
        }
      setPageNumber(selected);
    };


    return (
        <section className="list-products-component shop-page-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                            <div className="shop-sidebar">
                                <div className="sidebar-search">
                                    <form action="http://azim.commonsupport.com/Hanta/shop.html" method="post" className="search-form">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search here" required="" />
                                            <button type="submit"><i className="far fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>

                                {<Categories />}

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                            <div className="our-shop">
                                <div className="item-shorting clearfix">
                                    <div className="text pull-left">
                                        <p>Showing 1–12 of  {allProductsCount}</p>
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
    )
}

export default Products