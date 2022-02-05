import React from 'react';
import { useSelector } from 'react-redux';

const StaticticsPreview = () => {
    const expenses = useSelector(state => state.expensesSlice.expenses);

    const total = Object.values(expenses).reduce((t, {amount}) => t + amount, 0)

    console.log(total);

    return (
        <div className='stats-preview'>
            <div className='container'>
                <div className='left-col'>
                    <h6>SPANDING THIS MONTH</h6>
                    <p>$ {total}</p>
                </div>
                <div className='right-col'>
                    <img src='../stats.png' />
                </div>
            </div>
        </div>
    );
};

export default StaticticsPreview;
