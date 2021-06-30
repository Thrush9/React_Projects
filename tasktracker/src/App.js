import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: 'Doctors Appointment',
  //     day: 'Feb 5th at 2:30pm',
  //     reminder: true
  //   },
  //   {
  //     id: 2,
  //     text: 'Meeting at School',
  //     day: 'Feb 6th at 1:30pm',
  //     reminder: true
  //   },
  //   {
  //     id: 3,
  //     text: 'Food Shopping',
  //     day: 'Feb 7th at 3:30pm',
  //     reminder: false
  //   }
  // ]);

  const deleteTask = async (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTask),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !data.reminder } : task)));
  };

  const addTask = async (task) => {
    // console.log(task);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="App container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <hr />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask addTask={addTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
            </>
          )}
        ></Route>
        <Route path="/about" component={About}></Route>
        <hr />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
