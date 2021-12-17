import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const newProducts = products.slice(0, 6)
    useEffect(() => {
        fetch('https://polar-ravine-29494.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='mt-5 mb-0 m-3'>
            <Row xs={1} md={3} className="g-4">
                {newProducts.map(product => <Product key={product.camera} product={product}></Product>)}
            </Row>

        </div>
    );
};

export default Products;