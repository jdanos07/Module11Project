import { func, number } from 'prop-types';
import {useState, useEffect } from 'react';

const OrderList = ({ customerId, onOrderSelect }) => {
    const [orders, setOrders] =useState([]);

    // useEffect(setup<function>, [customerId])

    useEffect(() => {
        if (customerId) {
            const fetchOrders = [
                { id: 101, date: '2021-01-01' },
                { id: 102, date: 'date'}
            ];
            setOrders(fetchOrders);
        }
    }, [customerId]);

    return (
        <div className='order-list'>
            <h3>Orders</h3>
            <ul>
                {orders.map( order => (
                    <li key={order.id} onClick={() => onOrderSelect(order.id)}>
                        Order ID: {order.id}, Date: {order.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

OrderList.propTypes = {
    custoemrId: number,
    onOrderSelect: func
}

export default OrderList;