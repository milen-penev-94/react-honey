import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { useCart } from "../../../contexts/CartContext";
import './Header.css'

function Header () {
    const { cart, dispatch } = useCart();

    function cartQuantity() {
        let quantity = 0
        cart.forEach(cartItem => {
            quantity = quantity + parseInt(cartItem.quantity)
        })
        return quantity
    }

    function logo() {
        return (
            <div className="logo-box">
                <figure className="logo">
                    <Link to="/" ><img src="/images/logo-Penev.png" alt="" /></Link>
                </figure>
             </div>
        )
    }

    function navigationItems() {
        return (
            <ul className="navigation clearfix">
                <li><Link to="/">Начало</Link></li> 
                <li><Link to="/products">Продукти</Link></li>
                <li><Link to="/about">За нас</Link></li>
                <li><Link to="/contacts">Контакти</Link></li>   
            </ul>
        )
    }

    function navigationRightContent() {
        return (
            <ul className="menu-right-content clearfix">
                <li className="profile"><Link to="/profile" ><i className="far fa-user"></i></Link></li>
                <li className="cart-btn">
                    <Link to="/checkout"><i className="far fa-cart-plus"></i>
                        <div className="cartQantity" >
                            <span className="label">{cartQuantity()}</span>
                        </div>
                    </Link>
                </li>
            </ul>
        )
    }
    
    return (
            <div className="header-component ">
                <header className="main-header style-two">
                    <div className="header-lower">
                        <div className="outer-box">
                            {logo()}
                            <div className="menu-area">
                            
                                <div className="mobile-nav-toggler">
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                    <i className="icon-bar"></i>
                                </div>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        {navigationItems()}
                                    </div>
                                </nav>
                            </div>
                            <div className="nav-right-content">
                                {navigationRightContent()}
                            </div>
                        </div>
                    </div>

                    <div className="sticky-header">
                        <div className="outer-box">
                            {logo()}
                            <div className="menu-area">
                                <nav className="main-menu clearfix">
                                    {navigationItems()}  
                                </nav>
                            </div>
                            <div className="nav-right-content">
                                {navigationRightContent()}
                            </div>
                        </div>
                    </div>
                </header>

                <div className="mobile-menu">
                <div className="menu-backdrop"></div>
                <div className="close-btn"><i className="fas fa-times"></i></div>
                
                <nav className="menu-box">
                    <div className="nav-logo"><a href="index.html"><img src="/images/logo-Penev-white.png" alt="" title="" /></a></div>
                    <div className="menu-outer"></div>
                    <div className="contact-info">
                        <h4>Контакти</h4>
                        <ul>
                            <li>гр. Плевен, ул Лозенка №5</li>
                            <li><a href="tel:+8801682648101">Телефон: 0886582763</a></li>
                            <li><a href="mailto:penev.honey@gmail.com">penev.honey@gmail.com</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;