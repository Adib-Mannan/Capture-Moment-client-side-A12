import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";


const SingleProduct = ({ singleProduct }) => {
    const { name, img, price, reviews, features, specifications } = singleProduct;
    return (
        <div className='me-5 ms-5 mb-5  p-5'>
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <p>{reviews} Reviews <span className='custom-color'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span> </p>
                    <Card.Title>{name}</Card.Title>
                    <div>
                        <h5>Price : <span className='custom-color'>${price}</span></h5>
                        <h6>features : {features}</h6>
                        <h6>specification : {specifications}</h6>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SingleProduct;