import './App.css';
import React , {useState} from 'react'
import TodoForm from './components/todoForm'
import Todolist from './components/todolist'


function App() {

  const [todos , setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      <TodoForm addTodo={addTodo} />
      <Todolist todos = {todos} />
    </>
 
  );
}

export default App;
