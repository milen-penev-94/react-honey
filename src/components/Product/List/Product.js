const Product = ({product}) => {

    return (
        
        <div className="col-lg-6 col-md-6 col-sm-12 shop-block">
        <div className="shop-block-one">
            <div className="inner-box">
                <figure className="image-box"><a href="shop-details.html"><img src={product.image} alt=""/></a></figure>
                <div className="lower-content">
                    <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star-half"></i></li>
                    </ul>
                    <h5><a href="shop-details.html">{product.name}</a></h5>
                    <span className="price">
                        {product.salePrice
                            ? <span className="price">
                                <span className="sale-price">{product.salePrice}</span> <span className="old-price">{product.price}</span>
                            </span> 
                            : <span className="price">{product.price}</span>
                        }
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Product