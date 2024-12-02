
import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import Search from './components/Search';
import Filter from './components/Filter';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      text:"",
      category:"",
      isCompleted:"",
    },
    
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



const [search, setSearch] = useState("");

const [filter, setFilter] = useState("ALL");
const [sort, setSort] = useState("Asc");



  return (
    <div>
       <Menu />

    <h1>Projeto WEB1 - To-Do List</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div>
   {todos
   .filter((todo) =>
      filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
   .filter((todo) => 
      todo.text.toLowerCase().includes(search.toLowerCase()))
   .sort((a,b) =>
  sort === "Asc" ? a.text.localeCompare(b.text): b.text.localeCompare(a.text))
   .map((todo) => (
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
   ))}
    
    </div>
    <Form addTodo={addTodo} />

    <Footer totalTasks={Object.keys(todos)} />
    </div>
  );
}

export default App;
