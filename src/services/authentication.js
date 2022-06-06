import { userAuthenticated } from '../app/authenticationSlice';
import { toast } from "react-toastify";
import axiosInstance from './axiosInstance';

export const SignUp = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/Authentication/signup', credentials);
        dispatch(userAuthenticated(data));
    } catch(e) {
        toast.error(e.response.data);
    }
}

export const SignIn = async (dispatch, credentials) => {
    const newCredits = {
        ...credentials,
        email: ''
    };
    try {
        // api call
        const { data } = await axiosInstance.post('/Authentication/signin', newCredits);
        dispatch(userAuthenticated(data));
    } catch(e) {
        toast.error(e.response.data);
    }
}

export const ThirdPartySignIn = async (dispatch, token) => {
    try {
        // api call        
        const { data } = await axiosInstance.post(`/Authentication/google?token=${token}`);
        dispatch(userAuthenticated(data));
    } catch(e) {
        toast.error(e.response.data);
    }
}