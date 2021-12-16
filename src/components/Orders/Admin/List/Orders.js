import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import * as orderService from '../../../../services/orderService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Order from './Order';
import './Orders.css';

const Orders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(false);

    useEffect(() => {
        setDeleteOrder(false)

        orderService.getAll()
        .then(result => {
            setAllOrders(result);
        })
        .catch(err => {
            console.log(err);
        })  

    }, [deleteOrder]);

    function changeDeteleOrder(newValue) {
        setDeleteOrder(newValue);
    }


    return (
        <div className="component-orders auto-container">

            <Link to="/profile" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към профила</span>
            </Link>

            <h2>Поръчки</h2>

            {allOrders.length > 0
                ? (
                    <ul className="orders-list">
                        { allOrders.map(order => 
                        <li className="order" key={order.docId}  >
                            { <Order order={order} deleteOrder={deleteOrder} onChange={changeDeteleOrder} /> }
                        </li>
                        )}
                    </ul>
                ) 
                : <p className="no-data">Няма налични поръчки в базата с данни!</p>
            }
        </div>
    )
}

export default Orders;