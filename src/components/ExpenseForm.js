import React , {useState} from "react";
import "../styles/ExpenseForm.css";

export default function ExpenseForm(props) { 
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEntereddate] = useState('');
/*   const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''

  });
 */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
   /*  setUserInput({
      ...userInput,
      enteredTitle:event.target.value,
    }); */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
   /*  setUserInput({
      ...userInput,
      enteredAmount:event.target.value,
    }); */
  };

  const dateChangeHandler = (event) => {
    setEntereddate(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredAmount:event.target.value,
    }); */
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)

    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEntereddate('');


  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler}  />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"  onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
}
