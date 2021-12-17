import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageSingleOrder = (props) => {
    const { _id, name, email, address, city, number, productName } = props.order;
    return (
        <div>
            <Col>
                <Card
                    bg='secondary'
                    text='white'
                    key={_id}
                    className="mb-2"
                >
                    <Card.Header>Order ID : {_id}</Card.Header>
                    <Card.Body>
                        <Card.Title>Product Name : {productName}</Card.Title>
                        <div>
                            <h6> Name: {name}</h6>
                            <h6>Email: {email}</h6>
                            <h6>Address: {address}</h6>
                            <h6>City: {city}</h6>
                            <h6>Number: {number}</h6>
                            {props.children}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageSingleOrder;