import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/CartProvider";
import './Header.css'

function Header () {
    const { cart, dispatch } = useContext(CartContext);

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
                    <Link to="/" ><img src="/images/logo-3.png" alt="" /></Link>
                </figure>
             </div>
        )
    }

    function navigationItems() {
        return (
            <ul className="navigation clearfix">
                <li><Link to="/">Начало</Link></li> 
                <li><Link to="/products">Продукти</Link></li>
                <li><Link to="javascript;">За нас</Link></li>
                <li><a href="index.html">Blog</a></li>   
            </ul>
        )
    }

    function navigationRightContent() {
        return (
            <ul className="menu-right-content clearfix">
                <li className="profile"><Link to="/profile" ><i className="far fa-user"></i></Link></li>
                <li className="search-box-outer">
                    <div className="dropdown">
                        <button className="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-search"></i></button>
                        <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                            <div className="form-container">
                                <form method="post" action="http://azim.commonsupport.com/Hanta/blog.html">
                                    <div className="form-group">
                                        <input type="search" name="search-field" defaultValue=""  required="" />
                                        <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cart-btn">
                    <Link to="/cart"><i className="far fa-cart-plus"></i>
                        <div className="cartQantity" >
                            <span className="label">{cartQuantity()}</span>
                        </div>
                    </Link>
                </li>
                <li className="like-btn"><a href="index.html"><i className="far fa-heart"></i></a></li>
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