import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className='contact-container'>
            <h4 className='pt-5 text-light'>Contact us </h4>
            <Form onSubmit={handleSubmit} className='form pb-5'>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingEmailCustom"
                        type="email"
                        name='email'
                        placeholder="email"
                    />
                    <label htmlFor="floatingEmailCustom">Email</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingSubjectCustom"
                        type="subject"
                        name='subject'
                        placeholder="Subject"
                    />
                    <label htmlFor="floatingSubjectCustom">Subject</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingMessageCustom"
                        type="textarea"
                        as="textarea"
                        name='Message'
                        placeholder="Message"
                        style={{ height: '150px' }}
                    />
                    <label htmlFor="floatingMessageCustom">Your Message</label>
                </Form.Floating>
                <Button className='mt-4  custom-bg-color text-dark ' variant='' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactUs;