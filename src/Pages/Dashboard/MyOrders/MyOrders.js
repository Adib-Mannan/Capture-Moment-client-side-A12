import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://polar-ravine-29494.herokuapp.com/orders')
            .then(res => res.json())
            .then(result => {
                const myOrder = result.filter(order => order.email === user.email)
                setOrders(myOrder)
            })
    }, [user.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are You sure , You want to delete?')
        if (proceed) {
            const url = `https://polar-ravine-29494.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('deleted')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    return (
        <div className='ms-lg-5 me-lg-5'>
            <h1>My Orders {orders.length}</h1>
            <Row xs={1} md={3} className="g-4">
                {orders.map(order => <MyOrder key={order._id} order={order}>
                    <Button className='custom-bg-color text-dark' variant='' onClick={() => handleDelete(order._id)}>Delete</Button>
                </MyOrder>)}
            </Row>
        </div>
    );
};

export default MyOrders;