import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://polar-ravine-29494.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => { setReviews(data) })
    }, [])
    return (
        <div className='mt-5 mb-0 m-3'>
            <h2 className='mb-4'>Customer Reviews</h2>
            <Row xs={1} md={3} className="g-4">
                {reviews.map(review => <Review key={review._id} review={review}></Review>)}
            </Row>
        </div>
    );
};

export default Reviews;