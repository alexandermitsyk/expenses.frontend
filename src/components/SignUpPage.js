import { React, useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { SignUp } from '../services/authentication';
import { useDispatch } from 'react-redux';
import ThirdPartySignIns from './ThirdPartySignIns';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Divider from './Divider';

const SignUpPage = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    return  (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Expenses - Sign Up</title>
                <link rel="canonical" href="/signup" />
            </Helmet>
            <div className='sign-screen inverse'>
                <div className='right-sign'>
                    <Form
                        onSubmit={event => {
                            event.preventDefault();
                            if (password === confirmPassword) {
                                SignUp(dispatch, { userName, email, password });
                            }
                        }}>
                        <h4 style={{ textAlign: 'center' }}>Create an account</h4>
                        <InputGroup className='mb-3'>
                            <FormControl placeholder='Username'
                                onChange={event => setUserName(event.target.value)} />
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <FormControl placeholder='Email'
                                onChange={event => setEmail(event.target.value)} />
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <FormControl placeholder='Password' type='password'
                                onChange={event => setPassword(event.target.value)} />
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <FormControl placeholder='Confirm Password' type='password'
                                onChange={event => setConfirmPassword(event.target.value)} />
                        </InputGroup>
                        <Button type='submit' variant='primary' disabled={password !== confirmPassword || password.length <= 0}>Sign Up</Button>
                        <Link className='sign-link' to="/signin" >Sign in</Link>
                        <Divider />
                        <ThirdPartySignIns />
                    </Form>
                </div>
                <div className='left-sign'>
                    <img src='../illustrations/home-2.svg' alt='' />
                </div>
            </div>
        </>
    )
};

export default SignUpPage;
