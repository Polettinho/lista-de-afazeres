import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/logo.png'

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
