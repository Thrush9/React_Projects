import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const expenses = props.expenses;
  const [year, setYear] = useState('2021');

  const filterChangeHandler = (year) => {
    setYear(year);
  };

  const selectedYearExpenses = expenses.filter((exp) => exp.date.getFullYear().toString() === year);

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter selected={year} onYearChange={filterChangeHandler} />
        <ExpensesChart expenses={selectedYearExpenses} />
        <ExpenseList expenseList={selectedYearExpenses} />
      </div>
    </div>
  );
}

export default Expenses;
