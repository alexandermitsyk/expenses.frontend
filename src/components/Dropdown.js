import { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/authenticationSlice';
import { Squash as Hamburger } from 'hamburger-react'

const Dropdown = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.authenticationSlice);

    return (
        <div className='dropdown-custom-render'>
            <div className='nav'>
                {
                    isLoggedIn && (
                        <>
                            <NavLink variant='link' to='/'><ion-icon name="home-outline"></ion-icon> Home</NavLink>
                            <NavLink variant='link' to='/statistics'><ion-icon name="bar-chart-outline"></ion-icon> Statistics</NavLink>
                        </>
                    )
                }
                {
                    isLoggedIn 
                    ? <Button variant='link' href='/signin' onClick={() => { dispatch(logout()) }}><ion-icon name="log-out-outline"></ion-icon> Sign Out</Button>
                    : (
                        <>
                            <NavLink variant='link' to='/signin'><ion-icon name="log-in-outline"></ion-icon> Sign In</NavLink>
                            <NavLink variant='link' to='/signup'><ion-icon name="add-outline"></ion-icon> Sign Up</NavLink>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Dropdown;
