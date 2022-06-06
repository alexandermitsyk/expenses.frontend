import { 
    setExpenses, 
    newExpense, 
    editExpense,
    deleteExpense,
    setExpensesError, 
    newExpenseError,
    editExpenseError,
    deleteExpenseError,
} from "../app/expensesSlice";

import moment from 'moment';
import axiosInstance from './axiosInstance';

axiosInstance.interceptors.request.use((config) => {
    config.headers = { authorization: 'Bearer ' + sessionStorage.getItem('token') };
    return config;
});

export const GetExpenses = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get('/Expanses');

        dispatch(setExpenses(data));
    } catch (error) {
        dispatch(setExpensesError())
    }
}

export const NewExpense = async (dispatch, expense) => {
    try {
        const { data } = await axiosInstance.post('/Expanses', expense);

        dispatch(newExpense(data));
    } catch (error) {
        dispatch(newExpenseError())
    }
}

export const EditExpense = async (dispatch, expense) => {
    try {
        const newExpense = {
            ...expense,
            createdDate: moment(expense.createdDate).format(),
        }

        await axiosInstance.put('/Expanses', newExpense);
    
        dispatch(editExpense(newExpense))
    } catch (error) {
        dispatch(editExpenseError())
    }
}

export const DeleteExpense = async (dispatch, expense) => {
    try {
        await axiosInstance.delete('/Expanses', { data: {...expense} });
    
        dispatch(deleteExpense(expense))
    } catch (error) {
        dispatch(deleteExpenseError())
    }
}