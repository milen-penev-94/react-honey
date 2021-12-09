import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as orderService from '../../../../services/orderService';

const UpdateOrder = () => {
    const params = useParams();
    const thisOrderId = params.id;
    const [order, setOrder] = useState({});
    const [updateForm, setUpdateForm] = useState(false);
    
    const statuses = [
        { value: 'NEW', text: 'Нова' },
        { value: 'PROCESSING', text: 'В обработка' },
        { value: 'CANCELED', text: 'Отказана' },
        { value: 'COMPLETED', text: 'Завършена' },
    ]

    useEffect(() => {

        orderService.getOne(thisOrderId)
        .then(result => {
            setOrder(result);
        })   
        .catch(err => {
            console.log(err);
        })
       
    }, [updateForm]);

    return (
        <div className="update-order-component auto-container">
            <form>
                <label htmlFor="status">Статус: </label>
                <select id="status" name="status" value={order.status} onChange={(e) => setOrder(s => ({...s, status: e.target.value}))}>
                    {statuses.map(status => <option key={status.value} value={status.value}>{status.text}</option>)}
                </select>
            </form>
        </div>
    )
}

export default UpdateOrder;