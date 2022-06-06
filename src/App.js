import { React, useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import StatisticsPage from './pages/StatisticsPage';

import Loading from './components/Loading';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAuthenticated } from './app/authenticationSlice';

const App = () => {
    const [show, setShow] = useState(false);
    const { isLoggedIn } = useSelector(state => state.authenticationSlice);
    const dispatch = useDispatch();
    const handleShow = () => {    
        setShow(!show)
    };

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (token !== undefined && token !== null) {
            dispatch(userAuthenticated({ token: token }))
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Loading />
            <Navbar show={show} setShow={setShow} handleShow={handleShow} />
            <ToastContainer />
            <Switch>
                <Route exact path="/" render={() => (isLoggedIn ? <HomePage show={show} setShow={setShow} /> : <SignInPage />)} />
                <Route path="/signup" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
                <Route path="/signin" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
                <Route path="/statistics" render={() => (isLoggedIn ? <StatisticsPage /> : <SignInPage />)} />
                <Route component={() => <h2>Page not found!</h2>} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
