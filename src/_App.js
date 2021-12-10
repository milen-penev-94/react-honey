import Header from './components/Common/Header';
import Footer from './components/Footer';

function _App() {
  return (
    <div>

<div className="boxed_wrapper">

<div className="loader-wrap">
    <div className="preloader">
        <div className="preloader-close">Preloader Close</div>
        <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                    <span data-text-preloader="h" className="letters-loading">
                        h
                    </span>
                    <span data-text-preloader="a" className="letters-loading">
                        a
                    </span>
                    <span data-text-preloader="n" className="letters-loading">
                        n
                    </span>
                    <span data-text-preloader="t" className="letters-loading">
                        t
                    </span>
                    <span data-text-preloader="a" className="letters-loading">
                        a
                    </span>
                </div>
            </div>  
        </div>
    </div>
</div>

<div className="xs-sidebar-group info-group info-sidebar">
    <div className="xs-overlay xs-bg-black"></div>
    <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
            <div className="widget-heading">
                <a href="index.html" className="close-side-widget">X</a>
            </div>
            <div className="sidebar-textwidget">
                <div className="sidebar-info-contents">
                    <div className="content-inner">
                        <div className="logo">
                            <a href="index.html"><img src="/images/logo-2.png" alt="" /></a>
                        </div>
                        <div className="content-box">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
                        </div>
                        <div className="form-inner">
                            <h4>Get a free quote</h4>
                            <form action="http://azim.commonsupport.com/Hanta/index.html" method="post">
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Name" required="" />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Email" required="" />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Message..."></textarea>
                                </div>
                                <div className="form-group message-btn">
                                    <button type="submit" className="theme-btn-one">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Header />

<div className="mobile-menu">
    <div className="menu-backdrop"></div>
    <div className="close-btn"><i className="fas fa-times"></i></div>
    
    <nav className="menu-box">
        <div className="nav-logo"><a href="index.html"><img src="/images/logo.png" alt="" title="" /></a></div>
        <div className="menu-outer"></div>
        <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
                <li>Chicago 12, Melborne City, USA</li>
                <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                <li><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
        </div>
        <div className="social-links">
            <ul className="clearfix">
                <li><a href="index.html"><span className="fab fa-twitter"></span></a></li>
                <li><a href="index.html"><span className="fab fa-facebook-square"></span></a></li>
                <li><a href="index.html"><span className="fab fa-pinterest-p"></span></a></li>
                <li><a href="index.html"><span className="fab fa-instagram"></span></a></li>
                <li><a href="index.html"><span className="fab fa-youtube"></span></a></li>
            </ul>
        </div>
    </nav>
</div>

<section className="banner-section style-two">
    <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
        <div className="slide-item">
            <div className="image-layer" style={{backgroundImage: 'url(/images/banner/banner-1.jpg)'}}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>Fresh & Natural <span>Beekeeping</span></h1>
                    <h2>Best Organic & Frersh Honey</h2>
                    <div className="btn-box">
                        <a href="index-2.html" className="theme-btn-two">learn more</a>
                        <a href="shop.html" className="banner-btn-one">shop now</a>
                    </div>
                </div> 
            </div>
        </div>
        <div className="slide-item">
            <div className="image-layer" style={{backgroundImage: 'url(/images/banner/banner-2.jpg)'}}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>Fresh & Natural <span>Beekeeping</span></h1>
                    <h2>Best Organic & Frersh Honey</h2>
                    <div className="btn-box">
                        <a href="index-2.html" className="theme-btn-two">learn more</a>
                        <a href="shop.html" className="banner-btn-one">shop now</a>
                    </div>
                </div> 
            </div>
        </div>
        <div className="slide-item">
            <div className="image-layer" style={{backgroundImage: 'url(/images/banner/banner-3.jpg)'}}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>Fresh & Natural <span>Beekeeping</span></h1>
                    <h2>Best Organic & Frersh Honey</h2>
                    <div className="btn-box">
                        <a href="index-2.html" className="theme-btn-two">learn more</a>
                        <a href="shop.html" className="banner-btn-one">shop now</a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</section>

<section className="feature-style-two centred">
    <div className="auto-container">
        <div className="sec-title style-two">
            <p>Who We Are</p>
            <h2>Best features</h2>
        </div>
        <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div className="feature-block-two">
                    <div className="inner-box">
                        <div className="content-box">
                            <div className="icon-box"><i className="flaticon-flower"></i></div>
                            <h5>Flowers produce</h5>
                            <p>Sed ut perspiciatis unde omnis natus volup</p>
                            <div className="link"><a href="index-2.html"><i className="far fa-arrow-right"></i></a></div>
                        </div>
                        <div className="overlay-content" style={{backgroundImage: 'url(/images/resource/block-bg-1.jpg)'}}>
                            <div className="icon-box"><i className="flaticon-flower"></i></div>
                            <h5>Flowers produce</h5>
                            <p>But I must explain to you how all thimistaken idea of denou pleas</p>
                            <div className="link"><a href="index-2.html"><i className="far fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div className="feature-block-two">
                    <div className="inner-box">
                        <div className="content-box">
                            <div className="icon-box"><i className="flaticon-bee"></i></div>
                            <h5>Natural Bees</h5>
                            <p>Sed ut perspiciatis unde omnis natus volup</p>
                            <div className="link"><a href="index-2.html"><i className="far fa-arrow-right"></i></a></div>
                        </div>
                        <div className="overlay-content" style={{backgroundImage: 'url(/images/resource/block-bg-1.jpg)'}}>
                            <div className="icon-box"><i className="flaticon-bee"></i></div>
                            <h5>Natural Bees</h5>
                            <p>But I must explain to you how all thimistaken idea of denou pleas</p>
                            <div className="link"><a href="index-2.html"><i className="far fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div className="feature-block-two">
                    <div className="inner-box">
                        <div className="content-box">
                            <div className="icon-box"><i className="flaticon-hive"></i></div>
                            <h5>Bees seal cells</h5>
                            <p>Sed ut perspiciatis unde omnis natus volup</p>
                            <div className="link"><a href="index-2.html"><i className="far fa-arrow-right"></i></a></div>
                        </div>
                        <div className="overlay-content" style={{backgroundImage: 'url(/images/resource/block-bg-1.jpg)'}}>
                            <div className="icon-box"><i className="flaticon-hive"></i></div>
                            <h5>Bees seal cells</h5>
                            <p>But I must explain to you how all thimistaken idea of denou pleas</p>
                            <div className="link"><a href="index-2.html"><i className="far fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                <div className="feature-block-two">
                    <div className="inner-box">
                        <div className="content-box">
                            <div className="icon-box"><i className="flaticon-beehive"></i></div>
                            <h5>Well products</h5>
                            <p>Sed ut perspiciatis unde omnis natus volup</p>
                            <div className="link"><a href="index-2.html"><i className="far fa-arrow-right"></i></a></div>
                        </div>
                        <div className="overlay-content"  style={{backgroundImage: 'url(/images/resource/block-bg-1.jpg)'}}>
                            <div className="icon-box"><i className="flaticon-beehive"></i></div>
                            <h5>Well products</h5>
                            <p>But I must explain to you how all thimistaken idea of denou pleas</p>
                            <div className="link"><a href="index-2.html"><i className="far fa-arrow-right"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="about-style-two">
    <div className="auto-container">
        <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_2">
                    <div className="image-box">
                        <figure className="image image-1"><img src="/images/resource/about-1.jpg" alt="" /> </figure>
                        <figure className="image image-2"><img src="/images/resource/about-2.jpg" alt="" /> </figure>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_3">
                    <div className="content-box">
                        <div className="sec-title style-two">
                            <p>About Company</p>
                            <h2>years of since we provide honey successfully</h2>
                        </div>
                        <div className="tabs-box">
                            <div className="tab-btn-box">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li className="tab-btn active-btn" data-tab="#tab-1"><h5>Company History</h5></li>
                                    <li className="tab-btn" data-tab="#tab-2"><h5>About Us</h5></li>
                                </ul>
                            </div>
                            <div className="tabs-content">
                                <div className="tab active-tab" id="tab-1">
                                    <div className="inner-box">
                                        <div className="inner">
                                            <figure className="image-box"><img src="/images/resource/about-3.jpg" alt="" /> </figure>
                                            <div className="text">
                                                <p>Sedut perspiciat unde omnis iste natus volup tatem accusantium doloremquety laudantium, totam reperiam, eaque ips a quae ab illo inventore veritatis chitecto beatae vitae dicta sunt explicabo.</p>
                                            </div>
                                        </div>
                                        <div className="btn-box"><a href="about.html" className="theme-btn-two">learn more</a></div>
                                    </div>
                                </div>
                                <div className="tab" id="tab-2">
                                    <div className="inner-box">
                                        <div className="inner">
                                            <figure className="image-box"><img src="/images/resource/about-3.jpg" alt="" /> </figure>
                                            <div className="text">
                                                <p>Sedut perspiciat unde omnis iste natus volup tatem accusantium doloremquety laudantium, totam reperiam, eaque ips a quae ab illo inventore veritatis chitecto beatae vitae dicta sunt explicabo.</p>
                                            </div>
                                        </div>
                                        <div className="btn-box"><a href="about.html" className="theme-btn-two">learn more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="shop-section alternat-2 centred">
    <div className="pattern-layer" style={{backgroundImage: 'url(/images/shape/shape-4.png)'}}></div>
    <figure className="image-layer"><img src="/images/resource/bee-3.png" alt="" /> </figure>
    <div className="auto-container">
        <div className="sec-title style-two centred">
            <p>Visit Our Store</p>
            <h2>popular product</h2>
        </div>
        <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                <div className="shop-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box"><a href="shop-details.html"><img src="/images/resource/shop/shop-1.png" alt="" /> </a></figure>
                        <div className="lower-content">
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star-half"></i></li>
                            </ul>
                            <h5><a href="shop-details.html">Black fresh honey</a></h5>
                            <span className="price">$59.99</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                <div className="shop-block-one wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box"><a href="shop-details.html"><img src="/images/resource/shop/shop-2.png" alt="" /> </a></figure>
                        <div className="lower-content">
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star-half"></i></li>
                            </ul>
                            <h5><a href="shop-details.html">Red fresh honey</a></h5>
                            <span className="price">$79.99</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                <div className="shop-block-one wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box"><a href="shop-details.html"><img src="/images/resource/shop/shop-3.png" alt="" /> </a></figure>
                        <div className="lower-content">
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star-half"></i></li>
                            </ul>
                            <h5><a href="shop-details.html">Yellow fresh honey</a></h5>
                            <span className="price">$65.99</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
                <div className="shop-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box"><a href="shop-details.html"><img src="/images/resource/shop/shop-4.png" alt="" /> </a></figure>
                        <div className="lower-content">
                            <ul className="rating clearfix">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star-half"></i></li>
                            </ul>
                            <h5><a href="shop-details.html">Flower fresh honey</a></h5>
                            <span className="price">$49.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="more-btn"><a href="shop-1.html" className="theme-btn-two">view all product</a></div>
    </div>
</section>

<section className="feature-style-three">
    <div className="auto-container">
        <div className="row align-items-center clearfix">
            <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                <div className="content_block_4">
                    <div className="content-box">
                        <div className="sec-title style-two">
                            <p>Core Features</p>
                            <h2>Making honey is a complex and unique process</h2>
                        </div>
                        <div className="text">
                            <p>Sed ut perspiciatis unde omnis iste natus volup tatem accusantium doloremque laudant totams reperiam, eaque ipsa quae ab illo inventorety veritatis et qrchitecto beatae vitae </p>
                        </div>
                        <ul className="list-item clearfix">
                            <li>One Of Ther Best  Honey Providers</li>
                            <li>How To Create A Mobile App In Expoerise</li>
                            <li>Learning Resources  Challenging Times</li>
                        </ul>
                        <div className="btn-box"><a href="index-2.html" className="theme-btn-two">visit our shop</a></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                <div className="feature-column">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-three small-block clearfix wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="flaticon-bee-2"></i></div>
                                    <h3>Honeycomb</h3>
                                    <p>Sed perspiciatis unde omnis iste natus error volup</p>
                                </div>
                            </div>
                            <div className="feature-block-three wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="flaticon-bee-3"></i></div>
                                    <h3>100% Natural Bees</h3>
                                    <p>But must explain to you how this mistaken idea of denounci pleasure and praising pain was born</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-three wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="flaticon-honey"></i></div>
                                    <h3>well beekeeping</h3>
                                    <p>Quis autem vel eum iure reprehende qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum</p>
                                </div>
                            </div>
                            <div className="feature-block-three small-block wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="flaticon-honey-1"></i></div>
                                    <h3>fresh & orginals</h3>
                                    <p>Nor again is there anyone who loves or pursues or desires</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="video-section">
    <div className="auto-container">
        <div className="video-inner" style={{backgroundImage: 'url(/images/background/video-1.jpg)'}}>
            <div className="video-content">
                <div className="inner">
                    <div className="count-outer count-box">
                        <span className="count-text" data-speed="1500" data-stop="600">0</span>
                    </div>
                    <h3>Happy Clients</h3>
                </div>
            </div>
            <div className="video-btn">
                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption=""><i className="fas fa-play"></i></a>
            </div>
        </div>
    </div>
</section>

<section className="working-process centred">
    <div className="auto-container">
        <div className="sec-title light style-two centred">
            <p>Working Process</p>
            <h2>how dose we works</h2>
        </div>
        <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 process-block">
                <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <span className="count-text">01</span>
                        <div className="icon-box"><i className="flaticon-honey-3"></i></div>
                        <h3>Choose beekeeping</h3>
                        <p>But I must explain to you how this mistaken idea of denouncing pleasure and praising pain was born</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 process-block">
                <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <span className="count-text">02</span>
                        <div className="icon-box"><i className="flaticon-honey-2"></i></div>
                        <h3>Selected Bees</h3>
                        <p>But I must explain to you how this mistaken idea of denouncing pleasure and praising pain was born</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 process-block">
                <div className="process-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <span className="count-text">03</span>
                        <div className="icon-box"><i className="flaticon-honey-4"></i></div>
                        <h3>got well product</h3>
                        <p>But I must explain to you how this mistaken idea of denouncing pleasure and praising pain was born</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="testimonial-section alternat-2">
    <div className="auto-container">
        <div className="sec-title style-two">
            <p>Our Testimonials</p>
            <h2>People’s say us</h2>
        </div>
        <div className="testimonial-inner">
            <div className="single-item-carousel owl-carousel owl-theme">
                <div className="testimonial-block-one">
                    <div className="inner-box">
                        <figure className="author-thumb"><img src="/images/resource/testimonial-3.png" alt="" /> </figure>
                        <div className="text">
                            <p><img src="/images/icons/arrow-1.png" alt="" /> But I must explain to you how all this mistaken idea of denoun pleasure and praising pain was born and I will give you a complete acc ount of the system, and expound the actual teachings of the great explorer of the truth, the master-builder .</p>
                        </div>
                        <div className="author-info">
                            <h4>Benjamin Brady</h4>
                            <span className="designation">CEO & Founder</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-block-one">
                    <div className="inner-box">
                        <figure className="author-thumb"><img src="/images/resource/testimonial-3.png" alt="" /> </figure>
                        <div className="text">
                            <p><img src="/images/icons/arrow-1.png" alt="" /> But I must explain to you how all this mistaken idea of denoun pleasure and praising pain was born and I will give you a complete acc ount of the system, and expound the actual teachings of the great explorer of the truth, the master-builder .</p>
                        </div>
                        <div className="author-info">
                            <h4>Benjamin Brady</h4>
                            <span className="designation">CEO & Founder</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-block-one">
                    <div className="inner-box">
                        <figure className="author-thumb"><img src="/images/resource/testimonial-3.png" alt="" /> </figure>
                        <div className="text">
                            <p><img src="/images/icons/arrow-1.png" alt="" /> But I must explain to you how all this mistaken idea of denoun pleasure and praising pain was born and I will give you a complete acc ount of the system, and expound the actual teachings of the great explorer of the truth, the master-builder .</p>
                        </div>
                        <div className="author-info">
                            <h4>Benjamin Brady</h4>
                            <span className="designation">CEO & Founder</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-block-one">
                    <div className="inner-box">
                        <figure className="author-thumb"><img src="/images/resource/testimonial-3.png" alt="" /> </figure>
                        <div className="text">
                            <p><img src="/images/icons/arrow-1.png" alt="" /> But I must explain to you how all this mistaken idea of denoun pleasure and praising pain was born and I will give you a complete acc ount of the system, and expound the actual teachings of the great explorer of the truth, the master-builder .</p>
                        </div>
                        <div className="author-info">
                            <h4>Benjamin Brady</h4>
                            <span className="designation">CEO & Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="subscribe-section">
    <div className="outer-container">
        <div className="subscribe-inner">
            <div className="pattern-layer" style={{backgroundImage: 'url(/images/shape/shape-5.png)'}}></div>
            <div className="content-box">
                <div className="sec-title style-two centred">
                    <p>Get More Updates</p>
                    <h2>subscribe newsletters</h2>
                </div>
                <div className="text centred">
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was <br />born and I will give you a complete account of the system, and expound</p>
                </div>
                <form action="http://azim.commonsupport.com/Hanta/index-2.html" method="post" className="subscribe-form">
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Enter Your Emaill Address" required="" />
                        <button type="submit" className="theme-btn-two">subscribe now</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<section className="news-section sec-pad">
    <div className="auto-container">
        <div className="sec-title">
            <p>Reads Our Articles</p>
            <h2>Latest news & blog</h2>
        </div>
        <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box"><a href="blog-details.html"><img src="/images/news/news-1.jpg" alt="" /> </a></figure>
                        <div className="lower-content">
                            <h5><a href="blog-details.html">Smashing Podcast Episo With Mina Markham How Can I Learn React Which Video Conferencie Tools Are Most Accessibls</a></h5>
                            <ul className="post-info clearfix">
                                <li><i className="far fa-calendar-alt"></i>30 Aug 2020</li>
                                <li><i className="far fa-comment"></i><a href="index.html">Com (05)</a></li>
                            </ul>
                            <div className="link"><a href="blog-details.html">read more</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box"><a href="blog-details.html"><img src="/images/news/news-2.jpg" alt="" /> </a></figure>
                        <div className="lower-content">
                            <h5><a href="blog-details.html">Building A Facial Recognition Web Application With React How Can I Learn React Which Video Tools Are Most Accessibls</a></h5>
                            <ul className="post-info clearfix">
                                <li><i className="far fa-calendar-alt"></i>29 Aug 2020</li>
                                <li><i className="far fa-comment"></i><a href="index.html">Com (06)</a></li>
                            </ul>
                            <div className="link"><a href="blog-details.html">read more</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="inner-box">
                        <figure className="image-box"><a href="blog-details.html"><img src="/images/news/news-3.jpg" alt="" /> </a></figure>
                        <div className="lower-content">
                            <h5><a href="blog-details.html">Mirage JS Deep Dive Understan ding Timing, Response And Pass rough (Part 3)Can I Learn eact Tools Are Most Accessibls</a></h5>
                            <ul className="post-info clearfix">
                                <li><i className="far fa-calendar-alt"></i>28 Aug 2020</li>
                                <li><i className="far fa-comment"></i><a href="index.html">Com (02)</a></li>
                            </ul>
                            <div className="link"><a href="blog-details.html">read more</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="clients-section alternat-2">
    <div className="auto-container">
        <div className="auto-container">
            <div className="clients-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
                <figure className="clients-logo-box"><a href="index.html"><img src="/images/clients/clients-logo-1.png" alt="" /> </a></figure>
                <figure className="clients-logo-box"><a href="index.html"><img src="/images/clients/clients-logo-2.png" alt="" /> </a></figure>
                <figure className="clients-logo-box"><a href="index.html"><img src="/images/clients/clients-logo-3.png" alt="" /> </a></figure>
                <figure className="clients-logo-box"><a href="index.html"><img src="/images/clients/clients-logo-4.png" alt="" /> </a></figure>
                <figure className="clients-logo-box"><a href="index.html"><img src="/images/clients/clients-logo-5.png" alt="" /> </a></figure>
                <figure className="clients-logo-box"><a href="index.html"><img src="/images/clients/clients-logo-6.png" alt="" /> </a></figure>
            </div>
        </div>
    </div>
</section>

<Footer />

<button className="scroll-top scroll-to-target" data-target="html">
    <span className="far fa-angle-up"></span>
</button>
</div>


    </div>
  );
}

export default _App;
