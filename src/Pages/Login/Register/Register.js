import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './Register.css';
import { FaCameraRetro, FaGoogle } from 'react-icons/fa';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const { user, error, signInWithGoogle, registerUser } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = e => {
        // setError('')
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password Not Match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, history);
        e.preventDefault();
    }
    const handleGoogleSingIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className='body'>
            <h3 className='text-light pt-5'><FaCameraRetro /> Please Register</h3>
            <Form onSubmit={handleRegisterSubmit} className=' form'>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingNameCustom"
                        type="name"
                        name='name'
                        onBlur={handleOnBlur}
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingNameCustom">Name</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingEmailCustom"
                        type="email"
                        name='email'
                        onBlur={handleOnBlur}
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingEmailCustom">Email address</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        name='password'
                        onBlur={handleOnBlur}
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPassword2Custom"
                        type="password"
                        name='password2'
                        onBlur={handleOnBlur}
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword2Custom">Re Type Password</label>
                </Form.Floating>
                <Button className='mt-4  custom-bg-color text-dark ' variant='' type="submit">
                    Register
                </Button>
            </Form>
            <h6 className=' me-5 m-3'><Link to='/login'>Already Registered ?</Link></h6>
            <h4 className='text-light me-5 m-4'>Or Register With</h4>
            <Button onClick={handleGoogleSingIn} className='me-4 ps-5 pe-5' variant="secondary" size="lg">
                <FaGoogle />  Sign in with Google
            </Button>
            {user?.email && <Alert variant='danger'>
                login SuccessFully !!
            </Alert>}
            {error && <Alert variant='danger'>
                {error}
            </Alert>}
            <h1>--</h1>
        </div>
    );
};

export default Register;