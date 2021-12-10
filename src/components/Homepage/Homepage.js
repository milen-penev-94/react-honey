import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import './Homepage.css'

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
                <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
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
                    
                </div>
            </section>
        </div>    
    )
}

export default Homepage