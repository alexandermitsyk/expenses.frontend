import * as axios from 'axios';
import { setExpenseAmountPerCategory } from '../app/statisticsSlice';
import axiosInstance from './axiosInstance';


axiosInstance.interceptors.request.use((config) => {
    config.headers = { authorization: 'Bearer ' + sessionStorage.getItem('token') };
    return config;
});

export const getExpensesPerCategory = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get('/statistics');
        dispatch(setExpenseAmountPerCategory(data));
    } catch (error) {
        console.log(error);
    }
}