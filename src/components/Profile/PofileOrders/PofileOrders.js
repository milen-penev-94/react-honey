import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import * as orderService from '../../../services/orderService';
import ProfileOrder from './ProfileOrder'

const PofileOrders = () => {

    const { currentUser } = useAuth({})
    const [profileOrders, setProfileOrders] = useState();

    useEffect(() => {
        orderService.getAllOnThisUser(currentUser.uid)
        .then(result => {
            setProfileOrders(result);
        })   
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className="profile-orders-component">
            {profileOrders
                ? (
                    <ul className="orders-list">
                        { profileOrders.map(order => 
                        <li className="order" key={order.docId}  >
                           <ProfileOrder order={order} />
                        </li>
                        )}
                    </ul>
                ) 
                : <p className="no-data">Нямате направени поръчки!</p>
            }
        </div>
    )
}

export default PofileOrders;