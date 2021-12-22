import { Link } from 'react-router-dom';
import  { Helmet } from 'react-helmet-async';
import './Homepage.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Homepage = () => {

    const sliderItems = [
        { 
            value: 'slider-item-1', 
            image: 'url(/images/banner/banner-1.jpg)',
            title: 'Натурален био мед', 
            subtitle: 'от природата',
            learnMoreButton: 'Прочети повече' ,
            learnMoreLink: '' ,
            shоpNowButton: 'Купи сега',
            shоpNowLink: '/products',
        },
        { 
            value: 'slider-item-2', 
            image: 'url(/images/banner/banner-2.jpg)',
            title: 'Пчелен мед', 
            subtitle: 'от букет билки',
            learnMoreButton: 'Прочети повече' ,
            learnMoreLink: '' ,
            shоpNowButton: 'Купи сега',
            shоpNowLink: '/products',
        },
        { 
            value: 'slider-item-3', 
            image: 'url(/images/banner/banner-3.jpg)',
            title: 'Подари здраве', 
            subtitle: 'на любимите си хора',
            learnMoreButton: 'Прочети повече' ,
            learnMoreLink: '' ,
            shоpNowButton: 'Купи сега',
            shоpNowLink: '/products',
        },
    ]


    return (
        <div className="homepage-component">
            
            <Helmet>
                <title>Пчеларски магазин Пенев</title>
            </Helmet>

            <section className="banner-section style-two">
                <OwlCarousel className="homepage-banner-carousel owl-theme owl-carousel owl-dots-none" loop margin={1} nav items={1}>
                 {sliderItems.map(item => 
                    <div className="slide-item" key={item.value}>
                        <div className="image-layer" style={{backgroundImage: item.image}}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h1>{item.title}</h1>
                                <h2>{item.subtitle}</h2>
                                <div className="btn-box">
                                    <Link to={item.learnMoreLink} className="theme-btn-two">{item.learnMoreButton}</Link>
                                    <Link to={item.shоpNowLink} className="banner-btn-one">{item.shоpNowButton}</Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                    )} 
                    
                </OwlCarousel>
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
                                        <p>Пчеларски магазин Пенев</p>
                                        <h2>30 години продаваме качествен био мед</h2>
                                    </div>
                                    <div className="tabs-box">
                                        <div className="tab-btn-box">
                                            <ul className="tab-btns tab-buttons clearfix">
                                                <li className="tab-btn active-btn" data-tab="#tab-1"><h5>История</h5></li>
                                            </ul>
                                        </div>
                                        <div className="tabs-content">
                                            <div className="tab active-tab" id="tab-1">
                                                <div className="inner-box">
                                                    <div className="inner">
                                                        <figure className="image-box"><img src="/images/resource/about-3.jpg" alt="" /> </figure>
                                                        <div className="text">
                                                            <p>Ние сме в индустрията с пчелни продукти от 30 години. Стараем се да предоставим най-качествените пчелни продукти.</p>
                                                        </div>
                                                    </div>
                                                    <div className="btn-box"><Link to="/about"  className="theme-btn-two">За нас</Link></div>
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
        </div>    
    )
}

export default Homepage