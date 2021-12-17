import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import ManageSingleProduct from './ManageSingleProduct';

const ManageAllProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://polar-ravine-29494.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Admin Are You sure , You want to delete?')
        if (proceed) {
            const url = `https://polar-ravine-29494.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {products.map(product => <ManageSingleProduct key={product.camera} product={product}>
                    <Button onClick={() => { handleDelete(product._id) }} className='custom-bg-color text-dark ' variant=''>Delete</Button>
                </ManageSingleProduct>)}
            </Row>
        </div>
    );
};

export default ManageAllProduct;