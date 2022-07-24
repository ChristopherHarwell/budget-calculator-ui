import * as yup from "yup";

import React, { useEffect, useState } from "react";

import Bills from "../Bills/Bills";
import Expenses from "../Expenses/Expenses";
import Gross from "../Gross/Gross";
import Net from "../Net/Net";
import Submit from "../SubmitButton/Submit";
import axios from "axios";

const Form = () => {
    // Form State
    const [formState, setFormState] = useState({
        gross: 0,
        net: 0,
        bills: 0,
        dailyExpenses: 0,
    });

    // state for errors
    const [errors, setErrors] = useState({
        gross: 0,
        net: 0,
        bills: 0,
        dailyExpenses: 0,
    });

    // state for post requests
    const [budget, setBudget] = useState([]);

    // use yup to create form schema
    const formSchema = yup.object().shape({
        gross:
            yup.number()
                .moreThan(0)
                .required("gross is a required field"),
        net:
            yup.number()
                .moreThan(0)
                .required("Net is a required field"),
        bills:
            yup.number()
                .moreThan(0)
                .required("Bills is a required field"),
        dailyExpenses:
            yup.number()
                .required("Expenses is a required field"),
    });

    // keep track of input state
    const inputChanged = (event) => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]:event.target.value,
        };
        validateChange(event);
        setFormState(newFormData);
    };

    // handle state when form is submitted
    const sumbitForm = (event) => {
        event.preventDefault();
        axios
            .post("https://intense-beach-32253.herokuapp.com/https://budget-calculator-api-v1.herokuapp.com/", formState)
            .then((res) => {
                setBudget([res.data, ...budget]);
                // clear state after submitting
                setFormState({
                    gross: 0,
                    net: 0,
                    bills: 0,
                    dailyExpenses: 0,
                });
            })
            .catch((err) => console.error(err.res));
    };
    // submit button state
    const [buttonDisabled, setButtonDisabled] = useState(true);

    /** Each time the form value state is updated, check to see if it is valid per our schema.
     * This will allow us to enable/disable the submit button
     */
    useEffect(() => {
        // when input is valid change button state
        formSchema.isValid(formState).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    // validate changes based on schema
    const validateChange = (event) => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then((valid) => {
                setErrors({
                    ...errors,
                    [event.target.name]: "",
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0],
                });
            });
    };

    // convert budget object to array and loop over it
    const userArray = Object.entries(budget);

    return (
        <React.Fragment>
            <form onSubmit={sumbitForm}>
                <Gross value={formState.gross} input={inputChanged} />
                {errors.gross.length > 0 ? (
                    <p className="error">{errors.gross}</p>
                ) : null}
                <Net value={formState.net} input={inputChanged} />
                {errors.net.length > 0 ? <p className="error">{errors.net}</p> : null}
                <Bills value={formState.bills} input={inputChanged} />
                {errors.bills.length > 0 ? (
                    <p className="error">{errors.bills}</p>
                ) : null}
                <Expenses value={formState.dailyExpenses} input={inputChanged} />
                {errors.dailyExpenses.length > 0 ? (
                    <p className="error">{errors.dailyExpenses}</p>
                ) : null}

                {userArray.map((bill) => (<pre>{JSON.stringify(bill, null, 2)}</pre>))}

                <Submit
                    value={formState.submit}
                    input={inputChanged}
                    disabled={buttonDisabled}
                />
            </form>
        </React.Fragment>
    );
};

export default Form;
