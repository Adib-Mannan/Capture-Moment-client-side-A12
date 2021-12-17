import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleMakeAdmin = e => {
        const user = { email }
        fetch('https://polar-ravine-29494.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h3 className='mb-3'>Make Admin </h3>
            <Form onSubmit={handleMakeAdmin}>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        nam="email"
                        onBlur={handleOnBlur}
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Button className='mt-2 custom-bg-color text-dark ' variant='' type="submit">
                    Make Admin
                </Button>
            </Form>
            <div className='mt-4'>
                {success && <Alert variant='success'>
                    Admin Added Successfully!!
                </Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;