import React from 'react';

const Gross = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='gross'>
                Gross Income:
                <input
                    id='gross'
                    type='number'
                    name='gross'
                    value={props.value}
                    onChange={props.input}
                />
            </label>
            <br/>
        </React.Fragment>
    );
};

export default Gross;