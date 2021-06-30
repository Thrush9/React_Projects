import { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add Task');
      return;
    }

    addTask({ text, day, reminder });
    setDay('');
    setText('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="text">Task</label>
        <input type="text" placeholder="Enter Text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="text">Date & Time</label>
        <input type="text" placeholder="Enter Day" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="text">Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
