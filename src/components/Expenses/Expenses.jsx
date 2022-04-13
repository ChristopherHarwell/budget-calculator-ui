import React from 'react';

const Expenses = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='dailyExpenses'>
                Total Expenses:
                <input
                    id='dailyExpenses'
                    type='number'
                    name='dailyExpenses'
                    value={props.value}
                    onChange={props.input}
                />
            </label>
            <br/>
        </React.Fragment>
    );
};

export default Expenses;