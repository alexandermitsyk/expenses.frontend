import { userAuthenticated } from '../app/authenticationSlice';
import * as axios from 'axios';
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,
});

export const SignUp = async (dispatch, credentials) => {
    try {
        // api call
        const { data } = await axiosInstance.post('/signup', credentials);
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
        const { data } = await axiosInstance.post('/signin', newCredits);
        dispatch(userAuthenticated(data));
    } catch(e) {
        toast.error(e.response.data);
    }
}

export const ThirdPartySignIn = async (dispatch, token) => {
    try {
        // api call        
        const { data } = await axiosInstance.post(`/google?token=${token}`);
        dispatch(userAuthenticated(data));
    } catch(e) {
        toast.error(e.response.data);
    }
}