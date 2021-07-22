import React, { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpenses/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Insurance',
      amount: 99.99,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'Mobile',
      amount: 49.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ]);

  const onAddExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses([expense, ...expenses]);
  };

  return (
    <div className="container">
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
