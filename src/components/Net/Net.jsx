import React from 'react';

const Net = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='net'>
                NET Income:
                <input
                    id='net'
                    type='number'
                    name='net'
                    value={props.value}
                    onChange={props.input}
                />
            </label>
            <br/>
        </React.Fragment>
    );
};

export default Net;