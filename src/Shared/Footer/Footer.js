import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { FaHome, FaPhoneAlt, FaFacebookSquare, FaTwitter, FaLinkedinIn, FaGooglePlus } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div className='mt-5 mb-0 m-3 p-5 custom'>
            <div>
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <h5>About us</h5>
                        <br />
                        <small>The new hero pieces bring instant fashion credibility. Bright florals clash with camouflage prints</small>
                        <br />
                        <br />
                        <h5>Follow us</h5>
                        <div className='d-flex '>
                            <h4><FaFacebookSquare /></h4>
                            <h4 className='ms-4'><FaTwitter /></h4>
                            <h4 className='ms-4'><FaLinkedinIn /></h4>
                            <h4 className='ms-4'><FaGooglePlus /></h4>
                        </div>
                    </Col>
                    <Col >
                        <h5>Information</h5>
                        <small>About us</small>
                        <br />
                        <small>Services</small>
                        <br />
                        <small >Delivery information</small>
                        <br />
                        <small>Privacy policy</small>
                        <br />
                        <small>Terms and condition</small>
                        <br />
                        <small>Return Policy</small>
                    </Col>
                    <Col>
                        <h5>My Account</h5>
                        <small>My Account</small>
                        <br />
                        <small>Cart</small>
                        <br />
                        <small >Checkout</small>
                        <br />
                        <small>Contact</small>
                        <br />
                        <small>Validation</small>
                        <br />
                        <small>Wishlist</small>
                    </Col>
                    <Col>
                        <div >
                            <h5>Get in Touch</h5>
                            <FaHome />   <small> Dhanmondi-27, Dhaka</small>
                            <br />
                            <FaPhoneAlt />  <small>+088 017169696969</small>
                            <br />
                            <HiMail />  <small >capture@moment.com</small>

                        </div>
                    </Col>
                </Row>
            </div>
            <div className='pt-4 text-center'>
                <hr />
                <p >Copyright © 2021 Capture. All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;