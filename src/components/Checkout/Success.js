import {  Link, useParams } from "react-router-dom"
import './Success.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Success = () => {

    let params = useParams()
    let orderNumber = params.orderNumber

    return (
        <div className="loader-wrap component-success-checkout">
            <div className="preloader">
                <Link to="/" className="preloader-close">Към сайта</Link>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="check-circle"><FontAwesomeIcon icon={faCheckCircle} /></div>
                        <div className="bee-shop">Пчеларски магазин</div>
                        <div className="txt-loading">
                            <span data-text-preloader="P" className="letters-loading">P</span>
                            <span data-text-preloader="E" className="letters-loading">E</span>
                            <span data-text-preloader="N" className="letters-loading">N</span>
                            <span data-text-preloader="E" className="letters-loading">E</span>
                            <span data-text-preloader="V" className="letters-loading">V</span>
                        </div>
                        <div className="information">
                            <div className="order-number">
                                <strong>Поръчка №:</strong> <br />
                                {orderNumber}
                            </div>
                            <div className="text">Вашата поръчка беше направена успешно!</div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Success;