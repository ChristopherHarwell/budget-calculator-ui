import { useState, React } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const initialFormValues = {
    grossIncome: 0,
    netIncome: 0,
    bills: 0,
  };

  // const [grossIncome, setGrossIncome] = useState(0);
  // const [netIncome, setNetIncome] = useState(0);
  // const [bills, setBills] = useState(0);

  const [budget, setBudget] = useState(initialFormValues);

  const [formValues, setFormValues] = useState({
    gross: 0,
    net: 0,
    bills: 0,
    dailyExpenses: 0,
  });

  const onInputChange = (event) => {
    const inputThatChanged = event.target.name;
    const newValueForInput = event.target.value;
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBudget = {
      gross: formValues.gross,
      net: formValues.net,
      bills: formValues.bills,
      dailyExpenses: formValues.dailyExpenses
    }
    setBudget(newBudget);

  };

  // Savings stuff will be implemented later
  const [savings, setSavings] = useState(0);
  const [savingsPercentage, setSavingsPercentage] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);
  const [savingsGoalPercentage, setSavingsGoalPercentage] = useState(0);

  return <div className="App">
          <Form
        onInputChange={onInputChange}
        formValues={budget}
        onFormSubmit={handleSubmit}
      />
  </div>;
}

function Form(props) {
  return (
  <form onSubmit={props.handleSubmit}>
    {/* Gross Income */}
    <label>
      Enter your gross income for this pay period:
      <input
        type="text"
        value={props.formValues.grossIncome}
        onChange={props.onInputChange}
        name="grossIncome"
      />
    </label><br/>

    {/* Net Income */}
    <label>
      Enter your NET income for this pay period:
      <input
        type="text"
        name="netIncome"
        value={props.formValues.netIncome}
        onChange={props.onInputChange}
      />
    </label><br/>

    {/* Bills */}
    <label>
      Enter the total for all bills this month:
      <input
        type="text"
        value={props.formValues.bills}
        onChange={props.onInputChange}
      />
    </label>

    {/* Daily Expenses */}
    <label>
      Enter the total cost of your daily expenses:
      <input
        type="text"
        value={props.formValues.dailyExpenses}
        onChange={props.onInputChange}
      />
    </label>
    <input type="submit" />
    </form>
  );
}

export default App;
