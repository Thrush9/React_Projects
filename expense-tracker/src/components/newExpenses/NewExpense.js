import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [hideForm, setHideForm] = useState(true);

  const onSaveExpenseHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.ceil(Math.random() * 10000).toString()
    };
    props.onAddExpense(expense);
    setHideForm(!hideForm);
  };

  const hideFormHandler = () => {
    setHideForm(!hideForm);
  };

  return (
    <div className="new-expense">
      {!hideForm && <ExpenseForm onSaveExpense={onSaveExpenseHandler} onCancel={hideFormHandler} />}
      {hideForm && <button onClick={hideFormHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
