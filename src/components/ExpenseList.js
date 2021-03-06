import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpenses } from '../services/expenses';
import ExpenseModal from './ExpenseModal';
import ExpenseFilter from './ExpenseFilter';
import { DeleteExpense } from '../services/expenses';
import moment from 'moment';
import { Helmet } from "react-helmet";

const ExpenseList = ({ show, setShow }) => {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesSlice.expenses);
    const [selected, setSelected] = useState(undefined);
    const [isEditing, setIsEditing] = useState(false);

    const selectExpense = (id) => {
        const selected = expenses.filter(e => e.id === id);

        setSelected(selected[0]);
        setShow(!show);
        setIsEditing(!isEditing);
    }

    const deleteSelectedExpense = (expense) => {
        DeleteExpense(dispatch, expense);
    }

    useEffect(()  => {
        GetExpenses(dispatch);
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Your expenses</title>
                <link rel="canonical" href="/" />
            </Helmet>
            <Container>
                <ExpenseModal show={show} selectExpense={selectExpense} setShow={setShow} setIsEditing={setIsEditing} expense={selected} setSelected={setSelected} />
                <ExpenseFilter />
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>DESCRIPTION</th>
                            <th>DATE</th>
                            <th>COMMENT</th>
                            <th>AMOUNT</th>
                            <th></th>
                        </tr>
                    </thead>
                        <tbody>
                        {
                            expenses.map((expense, index) =>
                                <tr key={expense.id}>
                                    <ListRow deleteSelectedExpense={deleteSelectedExpense} selectExpense={selectExpense} expense={expense} />
                                </tr>
                            )
                        }
                        </tbody>
                </Table>
            </Container>
        </>
    )
};

const ListRow = ({ expense, selectExpense, deleteSelectedExpense }) => {
    return ( 
    <>
        <td>{expense.description}</td>
        <td>{moment(expense.createdDate).format('HH.MM A, DD/MM/YYYY')}</td>
        <td>{expense.comment}</td>
        <td>$ {expense.amount}</td>
        <td>
            <div className='settings'>
                <div onClick={() => selectExpense(expense.id)} className='edit'>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
                <div onClick={() => deleteSelectedExpense(expense)} className='delete'>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
            </div>
        </td>
    </>
    )
}

export default ExpenseList;
