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

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

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
        await axiosInstance.put('/Expanses', expense);
    
        dispatch(editExpense(expense))
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