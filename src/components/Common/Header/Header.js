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
      <header className="header-component main-header style-two">
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
    )
}

export default Header;