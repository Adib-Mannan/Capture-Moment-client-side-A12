import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import { useParams } from 'react-router-dom';
import SingleProduct from '../SinglePackage/SingleProduct';
import Header from '../../../Shared/Header/Header';



const Order = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://polar-ravine-29494.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [id])
    return (
        <div>
            <Header></Header>
            <h1 className='mt-2'>Place Order </h1>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <SingleProduct singleProduct={singleProduct}></SingleProduct>
                </Col>
                <Col>
                    <PlaceOrder singleProduct={singleProduct}></PlaceOrder>
                </Col>
            </Row>
        </div>
    );
};

export default Order;