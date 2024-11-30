
import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';

function App() {

  return (
    <div>
    <h1>Projeto WEB1 - To-Do List</h1>
    <Form />
    <Todo text="tarefa" category="trabalho"/>
    </div>
  );
}

export default App;
