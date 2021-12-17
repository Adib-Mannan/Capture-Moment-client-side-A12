import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating'

const Review = ({ review }) => {
    const { email, name, star, comment } = review;
    return (
        <div>
            <Card border="info">
                <Card.Header>Email : {email} <br /> Name : {name}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star custom-color"
                            fullSymbol="fas fa-star custom-color"
                            readonly
                        />
                    </Card.Title>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;