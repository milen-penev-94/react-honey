import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({product}) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 shop-block product">
            <div className="shop-block-one">
                <div className="inner-box">
                    <figure className="image-box product-image"><Link to={`/product/${product.docId}`}><img src={product.image} alt=""/></Link></figure>
                    <div className="lower-content">
                        <h5>{product.name}</h5>
                        <span className="price">
                            {product.salePrice
                                ? <span className="price">
                                    <span className="sale-price">{product.salePrice}лв.</span> <span className="old-price">{product.price}лв.</span>
                                </span> 
                                : <span className="price">{product.price}лв.</span>
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product