import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const expDate = props.date;
  const expTitle = props.title;
  const expAmount = props.amount;

  //const [expTitle, setTitle] = useState(props.title);

  // const btnClickHandler = () => {
  //   setTitle('Updated');
  //   console.log('clicked');
  // };

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={expDate} />
        <div className="expense-item__description">
          <h2>{expTitle}</h2>
          <div className="expense-item__price">{expAmount}</div>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;
