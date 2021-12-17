import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
    const { _id, name, img, features, reviews, price } = product;
    return (
        <Col>
            <Card style={{ height: '46rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <p>{reviews} Reviews <span className='custom-color'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span> </p>
                    <Card.Title>{name}</Card.Title>
                    <div>
                        <h5>Price : <span className='custom-color'>${price}</span></h5>
                        <h6>features : {features}</h6>
                        <Link to={`product/${_id}`}><Button className='custom-bg-color text-dark ' variant=''>Purchase</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;