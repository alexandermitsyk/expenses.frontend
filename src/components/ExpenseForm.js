import React, {useState, useEffect} from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { EditExpense, NewExpense } from '../services/expenses';
import DatePicker from 'react-datepicker';
import Categories from '../constants/Categories';

const ExpenseForm = ({ expense, handleClose }) => {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(Categories.Salary);
    const [comment, setComment] = useState('');
    const [isNewExpense, setIsNewExpense] = useState(true);
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        if(expense !== undefined) {
            setIsNewExpense(false);
            setAmount(expense.amount);
            setComment(expense.comment);
            setStartDate(new Date(expense.createdDate));

            setDescription(expense.description);
        } else {
            setIsNewExpense(true);
        }
    }, [expense]);

    return (
        <Form className='expenses-form' onSubmit={event => {
            event.preventDefault();

            if(isNewExpense) {
                NewExpense(dispatch, { 
                    description: description,
                    createdDate: startDate,
                    comment: comment, 
                    amount: Number(amount)
                });
                handleClose();
            } else {
                EditExpense(dispatch, {
                    id: expense.id,
                    description: description,
                    createdDate: startDate,
                    comment: comment,
                    amount: Number(amount)
                });
                handleClose();
            }
        }}>
            <Row className='expenses-form-container'>
                <Col xs={12}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as='select' onChange={event => setDescription(event.target.value)}>
                        {
                            Object.keys(Categories).map((key) => {
                                const value = Categories[key];

                                if (typeof value === 'function') return null;

                                return (
                                    <option key={`option-${value}`} value={value}>
                                        { Categories.getName(value) }
                                    </option>
                                )
                            })
                        }
                    </Form.Control>
                </Col>
            </Row>
            <Row className='expenses-form-container'>
                <Col xs={12}>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control onChange={event => setComment(event.target.value)} value={comment} type='textarea' />
                </Col>
            </Row>
            <Row className='expenses-form-container'>
                <Col xs={12}>
                    <Form.Label>Transaction date</Form.Label>
                    <DatePicker className='form-control' selected={startDate} onChange={(date) => setStartDate(date)} />
                </Col>
            </Row>
            <Row className='expenses-form-container'>
                <Col xs={12}>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control onChange={event => setAmount(event.target.value)} value={amount} placeholder={amount} type='number' step='0.01' />
                </Col>
            </Row>
            <div className='modal-footer'>
                    { isNewExpense ? <Button variant='primary' type='submit'>Add</Button> :<Button variant='success' type='submit'>Save</Button> }
                    <Button
                        variant='default' 
                        onClick={handleClose}
                    >
                         Cancel
                    </Button> 
            </div>
        </Form>
    );
};

export default ExpenseForm;
