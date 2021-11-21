function Header () {
    
    return (
      <header className="main-header style-two">
        <div className="header-lower">
            <div className="outer-box">
                <div className="logo-box">
                    <figure className="logo"><a href="index.html"><img src="/images/logo-3.png" alt="" /> </a></figure>
                </div>
                <div className="menu-area">
                  
                    <div className="mobile-nav-toggler">
                        <i className="icon-bar"></i>
                        <i className="icon-bar"></i>
                        <i className="icon-bar"></i>
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className="current dropdown"><a href="index.html">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home Page 01</a></li>
                                        <li><a href="index-2.html">Home Page 02</a></li>
                                        <li><a href="index-onepage.html">OnePage Home</a></li>
                                        <li><a href="index-rtl.html">RTL Home</a></li>
                                        <li className="dropdown"><a href="index.html">Header Style</a>
                                            <ul>
                                                <li><a href="index.html">Header Style 01</a></li>
                                                <li><a href="index-2.html">Header Style 02</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> 
                                <li className="dropdown"><a href="index.html">Pages</a>
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="service.html">Our Services</a></li>
                                        <li><a href="gallery.html">Our Gallery</a></li>
                                        <li><a href="error.html">404</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="index.html">Shop</a>
                                    <ul>
                                        <li><a href="shop.html">Shop Page 01</a></li>
                                        <li><a href="shop-2.html">Shop Page 02</a></li>
                                        <li><a href="shop-3.html">Shop Page 03</a></li>
                                        <li><a href="shop-details.html">Shop Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="index.html">Elements</a>
                                    <div className="megamenu">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 column">
                                                <ul>
                                                    <li><h4>Elements 1</h4></li>
                                                    <li><a href="about-element-1.html">About Block 01</a></li>
                                                    <li><a href="about-element-2.html">About Block 02</a></li>
                                                    <li><a href="feature-element-1.html">Feature Block 01</a></li>
                                                    <li><a href="feature-element-2.html">Feature Block 02</a></li>
                                                    <li><a href="shop-element-1.html">Shop Block 01</a></li>
                                                    <li><a href="shop-element-2.html">Shop Block 02</a></li>
                                                    <li><a href="news-element-1.html">News Block 01</a></li>
                                                    <li><a href="news-element-2.html">News Block 02</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 column">
                                                <ul>
                                                    <li><h4>Elements 2</h4></li>
                                                    <li><a href="feature-element-3.html">Feature Block 03</a></li>
                                                    <li><a href="feature-element-4.html">Feature Block 04</a></li>
                                                    <li><a href="funfact-element-1.html">Counter Block 01</a></li>
                                                    <li><a href="funfact-element-2.html">Counter Block 02</a></li>
                                                    <li><a href="process-element-1.html">Process Block 01</a></li>
                                                    <li><a href="process-element-2.html">Process Block 02</a></li>
                                                    <li><a href="testimonial-element.html">Testimonial Block</a></li>
                                                    <li><a href="clients-element.html">Clients Block</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4 column">
                                                <ul>
                                                    <li><h4>Elements 3</h4></li>
                                                    <li><a href="feature-element-5.html">Feature Block 05</a></li>
                                                    <li><a href="video-element.html">Video Block</a></li>
                                                    <li><a href="chooseus-element-1.html">Chooseus Block 01</a></li>
                                                    <li><a href="chooseus-element-2.html">Chooseus Block 02</a></li>
                                                    <li><a href="chooseus-element-3.html">Chooseus Block 03</a></li>
                                                    <li><a href="subscribe-element.html">Subscribe Block</a></li>
                                                </ul>
                                            </div>                                     
                                        </div>                                        
                                    </div>
                                </li>  
                                <li className="dropdown"><a href="index.html">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">Blog Grid</a></li>
                                        <li><a href="blog-2.html">Blog Standard</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>  
                                <li><a href="contact.html">Contact</a></li>   
                            </ul>
                        </div>
                    </nav>
                    <ul className="menu-right-content clearfix">
                        <li className="search-box-outer">
                            <div className="dropdown">
                                <button className="search-box-btn" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-search"></i></button>
                                <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                                    <div className="form-container">
                                        <form method="post" action="http://azim.commonsupport.com/Hanta/blog.html">
                                            <div className="form-group">
                                                <input type="search" name="search-field" value="" placeholder="Search...." required="" />
                                                <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="cart-btn">
                            <a href="shop.html"><i className="far fa-cart-plus"></i><span>0</span></a>
                        </li>
                        <li className="like-btn"><a href="index.html"><i className="far fa-heart"></i></a></li>
                    </ul>
                </div>
                <div className="nav-right-content">
                    <ul className="social-links clearfix">
                        <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                    <div className="nav-box">
                        <button className="nav-toggler navSidebar-button clearfix">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

      
        <div className="sticky-header">
            <div className="outer-box">
                <div className="logo-box">
                    <figure className="logo"><a href="index.html"><img src="/images/logo.png" alt="" /> </a></figure>
                </div>
                <div className="menu-area">
                    <nav className="main-menu clearfix">

                    </nav>
                    <ul className="menu-right-content clearfix">
                        <li className="search-box-outer">
                            <div className="dropdown">
                                <button className="search-box-btn" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-search"></i></button>
                                <div className="dropdown-menu search-panel" aria-labelledby="dropdownMenu3">
                                    <div className="form-container">
                                        <form method="post" action="http://azim.commonsupport.com/Hanta/blog.html">
                                            <div className="form-group">
                                                <input type="search" name="search-field" value="" placeholder="Search...." required="" />
                                                <button type="submit" className="search-btn"><span className="fas fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="cart-btn">
                            <a href="shop.html"><i className="far fa-cart-plus"></i><span>0</span></a>
                        </li>
                        <li className="like-btn"><a href="index.html"><i className="far fa-heart"></i></a></li>
                    </ul>
                </div>
                <div className="nav-right-content">
                    <ul className="social-links clearfix">
                        <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="index.html"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                    <div className="nav-box">
                        <button className="nav-toggler navSidebar-button clearfix">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;