import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const GiveReview = () => {
    const [review, setReview] = useState({});
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);

    }
    const handleAddReview = e => {
        const data = {
            email: user.email,
            name: user.displayName,
            star: review.star,
            comment: review.comment
        }
        fetch('https://polar-ravine-29494.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Give Your Review</h1>
            <Form onSubmit={handleAddReview} className=' form'>
                <Form.Floating className="mb-3">
                    <Form.Control
                        min='0'
                        max='5'
                        id="floatingStarCustom"
                        type="number"
                        name='star'
                        onBlur={handleOnBlur}
                        placeholder="star"
                    />
                    <label htmlFor="floatingStarCustom">Star (out of 5)</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingCommentCustom"
                        type="textarea"
                        as="textarea"
                        name='comment'
                        onBlur={handleOnBlur}
                        placeholder="comment"
                        style={{ height: '100px' }}
                    />
                    <label htmlFor="floatingCommentCustom">Comment</label>
                </Form.Floating>
                <Button className='mt-4  custom-bg-color text-dark ' variant='' type="submit">
                    Add
                </Button>
            </Form>
            <div className='mt-4'>
                {success && <Alert variant='success'>
                    Review Added Successfully!!
                </Alert>}
            </div>
        </div>
    );
};

export default GiveReview;