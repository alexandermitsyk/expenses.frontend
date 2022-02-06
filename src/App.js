import { React, useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAuthenticated } from './app/authenticationSlice';
import { ToastContainer } from 'react-toastify';
import StatisticsPage from './components/StatisticsPage';

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
    }, []);

  return <BrowserRouter>
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
};

export default App;
