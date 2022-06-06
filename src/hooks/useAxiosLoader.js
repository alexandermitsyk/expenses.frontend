import {
    useEffect, useState, useCallback, useMemo,
} from 'react';

import axiosInstance from '../services/axiosInstance';

// https://stackoverflow.com/questions/59335963/react-hooks-display-global-spinner-using-axios-interceptor
export const useAxiosLoader = () => {
    const [counter, setCounter] = useState(0);
    const increment = useCallback(() => setCounter((c) => c + 1), [setCounter]);
    const decrement = useCallback(() => setCounter((c) => c - 1), [setCounter]);

    const interceptors = useMemo(() => ({
        request: (config) => {
            increment();
            
            return config;
        },
        response: (response) => {
            setTimeout(() => {
                decrement();
            }, 20);
            
            return response;
        },
        error: (error) => {
            setTimeout(() => {
                decrement();
            }, 20);
            
            return Promise.reject(error);
        },
    }), [increment, decrement]);

    useEffect(() => {
        const reqInterceptor = axiosInstance.interceptors.request.use(interceptors.request, interceptors.error);
        const resInterceptor = axiosInstance.interceptors.response.use(interceptors.response, interceptors.error);

        console.log(reqInterceptor);

        return () => {
            axiosInstance.interceptors.request.eject(reqInterceptor);
            axiosInstance.interceptors.response.eject(resInterceptor);
        };
    }, [interceptors]);

    return [counter > 0];
};