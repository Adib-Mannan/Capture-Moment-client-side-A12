import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './AddAProduct.css'

const AddAProduct = () => {
    const [productData, setProductData] = useState({});
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData }
        newProductData[field] = value;
        setProductData(newProductData);

    }
    const handleAddProduct = e => {
        console.log(productData)
        fetch('https://polar-ravine-29494.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setSuccess(true)
                }
            })
        e.preventDefault();
    }
    return (
        <div className='body'>
            <h3 className='text-light pt-5'> Add A Product</h3>
            <Form onSubmit={handleAddProduct} className=' form'>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingCameraCustom"
                        type="number"
                        name='camera'
                        onBlur={handleOnBlur}
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingCameraCustom">Camera No</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingNameCustom"
                        type="name"
                        name='name'
                        onBlur={handleOnBlur}
                        placeholder="name"
                    />
                    <label htmlFor="floatingNameCustom">Product Name</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingReviewsCustom"
                        type="number"
                        name='reviews'
                        onBlur={handleOnBlur}
                        placeholder="reviews"
                    />
                    <label htmlFor="floatingReviewsCustom">Reviews</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingImageCustom"
                        type="img"
                        name='img'
                        onBlur={handleOnBlur}
                        placeholder="image"
                    />
                    <label htmlFor="floatingImageCustom">Image Link</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingPriceCustom"
                        type="number"
                        name='price'
                        onBlur={handleOnBlur}
                        placeholder="price"
                    />
                    <label htmlFor="floatingPriceCustom">Price</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingFeaturesCustom"
                        type="textarea"
                        as="textarea"
                        name='features'
                        onBlur={handleOnBlur}
                        placeholder="features"
                        style={{ height: '100px' }}
                    />
                    <label htmlFor="floatingFeaturesCustom">Features</label>
                </Form.Floating>
                <Form.Floating >
                    <Form.Control
                        id="floatingSpecificationsCustom"
                        type="textarea"
                        as="textarea"
                        name='specifications'
                        onBlur={handleOnBlur}
                        placeholder="specifications"
                        style={{ height: '100px' }}
                    />
                    <label htmlFor="floatingSpecificationsCustom">Specifications</label>
                </Form.Floating>
                <Button className='mt-4  custom-bg-color text-dark ' variant='' type="submit">
                    Add A Product
                </Button>
            </Form>
            <div className='mt-4'>
                {success && <Alert variant='success'>
                    Product Added Successfully!!
                </Alert>}
            </div>
        </div>
    );
};

export default AddAProduct;