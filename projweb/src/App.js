
import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';

function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar Tarefa",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Criar Tarefa 2",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random()*10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

const removeTodo = (id) => {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter(todo => 
    todo.id !== id ? todo : null);
    setTodos(filteredTodos);
}

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
  setTodos(newTodos);
}

  return (
    <div>
    <h1>Projeto WEB1 - To-Do List</h1>
    <div>
   {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
   ))}
    
    </div>
    <Form addTodo={addTodo} />
    </div>
  );
}

export default App;
