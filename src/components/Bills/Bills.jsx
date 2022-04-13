import React from 'react';

const Bills = (props) => {
    return (
        <React.Fragment>
            <label htmlFor='bills'>
                Total Bills:
                <input
                    id='bills'
                    type='number'
                    name='bills'
                    value={props.value}
                    onChange={props.input}
                />
            </label>
            <br/>
        </React.Fragment>
    );
};

export default Bills;