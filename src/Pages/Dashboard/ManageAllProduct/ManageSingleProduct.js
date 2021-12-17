import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const ManageSingleProduct = (props) => {
    const { name, img, features, reviews, price } = props.product;
    return (
        <div>
            <Col>
                <Card style={{ height: '46rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <p>{reviews} Reviews <span className='custom-color'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span> </p>
                        <Card.Title>{name}</Card.Title>
                        <div>
                            <h5>Price : <span className='custom-color'>${price}</span></h5>
                            <h6>features : {features}</h6>
                            {props.children}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageSingleProduct;