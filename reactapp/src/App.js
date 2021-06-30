import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="app container-fluid bg-light p-4">
      <h2>My Todos</h2>
      <div className="d-flex">
        <Todo text="HTML5" />
        <Todo text="CSS3" />
        <Todo text="JavaScript" />
      </div>
    </div>
  );
}

export default App;
