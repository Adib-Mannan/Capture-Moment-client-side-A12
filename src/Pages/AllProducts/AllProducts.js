import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Product from '../Home/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://polar-ravine-29494.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <h1>All Products (explore)</h1>
            <div className='mt-5 mb-0 m-3'>
                <Row xs={1} md={3} className="g-4">
                    {products.map(product => <Product key={product.camera} product={product}></Product>)}
                </Row>

            </div>
        </div>
    );
};

export default AllProducts;