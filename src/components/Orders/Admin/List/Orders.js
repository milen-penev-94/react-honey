import React, { useState, useEffect } from 'react';
import * as orderService from '../../../../services/orderService';
import Order from './Order';
import './Orders.css'

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