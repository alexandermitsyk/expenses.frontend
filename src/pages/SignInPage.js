import { React, useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { SignIn } from '../services/authentication';
import { useDispatch } from 'react-redux';
import ThirdPartySignIns from '../components/ThirdPartySignIns';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Divider from '../components/Divider';

const SignInPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Expenses - Sign In</title>
                <link rel="canonical" href="/signin" />
            </Helmet>
            <div className='sign-screen'>
                <div className='left-sign'>
                    <img src='../illustrations/home-1.svg' alt='' />
                </div>
                <div className='right-sign'>
                    <Form
                    onSubmit={event => {
                        event.preventDefault();
                        SignIn(dispatch, { userName, password });
                    }}>
                        <h4 style={{ textAlign: 'center' }}>Welcome back</h4>
                        <InputGroup className='mb-3'>
                            <FormControl placeholder='Username'
                                onChange={event => setUserName(event.target.value)} />
                        </InputGroup>
                        <InputGroup className='mb-3'>
                            <FormControl placeholder='Password' type='password'
                                onChange={event => setPassword(event.target.value)} />
                        </InputGroup>
                        <Button type='submit' variant='primary'>Sign In</Button>
                        <Link className='sign-link' to="/signup" >Sign up</Link>
                    </Form>
                    <Divider />
                    <ThirdPartySignIns />
                </div>
            </div>
        </>
    )
};

export default SignInPage;
