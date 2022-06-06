import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Squash as Hamburger } from 'hamburger-react';
import Dropdown from './Dropdown';

const Navbar = ({ show, handleShow }) => {
    const [isOpen, setOpen] = useState(false);
    const { isLoggedIn } = useSelector(state => state.authenticationSlice);

    return (
        <>
            <Nav className='navbar'>
                <div className='container header-grid-container'>
                    <Hamburger color="#fff" size={24} toggled={isOpen} toggle={setOpen} />
                    { isOpen ? <Dropdown toggle={setOpen} /> : null}
                    <h1 className='brand'>Expenses Manager</h1>
                    { isLoggedIn && <button className='add-button' onClick={handleShow}><ion-icon name="add-circle-outline"></ion-icon> ADD</button> } 
                </div>
            </Nav>
        </>
    )
};

export default Navbar;
