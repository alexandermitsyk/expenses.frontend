import React from 'react';
import { useAxiosLoader } from '../hooks/useAxiosLoader';

const Loading = () => {
    const [loading] = useAxiosLoader();
    
    return(
        loading 
            ? (
                <div className='loading-container text-primary'>
                    <div className="spinner-border" role="status"> <span class="sr-only"></span></div>
                </div> 
            )
            : null
    );
};

export default Loading;
