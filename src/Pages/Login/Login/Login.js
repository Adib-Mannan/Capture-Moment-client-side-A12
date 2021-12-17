import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { FaCameraRetro, FaGoogle } from 'react-icons/fa';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { user, error, signInWithGoogle, loginUser } = useAuth();
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
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSingIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className='body'>
            <h3 className='text-light pt-5'><FaCameraRetro /> Please LogIn</h3>
            <Form onSubmit={handleRegisterSubmit} className=' form'>
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
                <Button className='mt-4' variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
            <h6 className='me-5 m-3'><Link to='/register'>New user ? Please Register</Link></h6>
            <h4 className='text-light me-4 mb-4'>Or Login With</h4>
            <Button onClick={handleGoogleSingIn} className='me-4 ps-5 pe-5' variant="secondary" size="lg">
                <FaGoogle />  Log in with Google
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

export default Login;