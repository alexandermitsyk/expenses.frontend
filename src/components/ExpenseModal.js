import React from 'react';
import { Modal } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';

const ExpenseModal = ({ show, setShow, expense, setIsEditing, selectExpense }) => {
    const handleClose = () => { 
        setShow(false);
        selectExpense(undefined);
        setIsEditing(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{expense !== undefined ? 'Edit expense' : 'Add expense' }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExpenseForm expense={expense} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ExpenseModal;
