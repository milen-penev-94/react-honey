function Footer () {

    return (
        <footer className="main-footer">
            <div className="pattern-layer" style={{backgroundImage: 'url(/images/shape/shape-3.png)'}}></div>
            <div className="image-layer">
                <figure className="image image-1"><img src="/images/resource/honey-1.png" alt="" /> </figure>
                <figure className="image image-2"><img src="/images/resource/honey-2.png" alt="" /> </figure>
            </div>
            <div className="auto-container">
                <div className="footer-top">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h4>Quick Links</h4>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><a href="index.html">Company History</a></li>
                                        <li><a href="index.html">Latest News & Blog</a></li>
                                        <li><a href="index.html">Popular Services</a></li>
                                        <li><a href="index.html">Honeycomb</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h4>Company</h4>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><a href="index.html">About Comapny</a></li>
                                        <li><a href="index.html">World Wide Clients</a></li>
                                        <li><a href="index.html">Happy People’s</a></li>
                                        <li><a href="index.html">Winning Awards</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="widget-content">
                                    <h6>Don’t Hesite To conatct with us feel free when  you talk with us</h6>
                                    <ul className="social-links clearfix">
                                        <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                    <div className="call-box"><p><i className="fal fa-phone"></i><a href="tel:0123456789">+012 (345) 6789</a></p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget post-widget">
                                <div className="widget-title">
                                    <h4>Recent News</h4>
                                </div>
                                <div className="post-inner">
                                    <div className="post">
                                        <figure className="post-thumb"><a href="blog-details.html"><img src="/images/resource/footer-post-1.jpg" alt="" /> </a></figure>
                                        <h6><a href="blog-details.html">Building A Facial world soc Recognition Web Appl</a></h6>
                                        <span className="post-date">25 JUly 2020</span>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><a href="blog-details.html"><img src="/images/resource/footer-post-2.jpg" alt="" /> </a></figure>
                                        <h6><a href="blog-details.html">Mirage JS Deep nderstanding  Timing Response Passthr</a></h6>
                                        <span className="post-date">24 JUly 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom clearfix">
                    <div className="text pull-left">
                        <p>Copy&copy; <a href="index.html">Hanta.</a> Example -2020</p>
                    </div>
                    <div className="text pull-right">
                        <p>All Right Reserved Design By Example</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;