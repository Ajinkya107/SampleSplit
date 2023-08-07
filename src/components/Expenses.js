import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
 
  const [filteredyear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteretdExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredyear;
  });

    /* const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; */ 
  let expensesContent = <p>No expenses found.</p>;

  if (filteretdExpenses.length > 0) {
    expensesContent = filteretdExpenses.map(
      expense => 
      <ExpenseItem 
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>)
  }
   return (
    <div className="expenses">
       <ExpensesFilter selected={filteredyear} onChangeFilter = {filterChangeHandler}></ExpensesFilter> 
        <ExpensesChart expenses={filteretdExpenses}/>
      {expensesContent}
      {/* 
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      /> */}
    </div>
    
  );
}

export default Expenses;
