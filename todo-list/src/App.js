import './App.css';
import {getTodolist, updateTodoList} from './api';
import React, {useRef, useState, useEffect} from 'react';

function App() {
    const taskInput = useRef('');
    const todoListCopy = useRef([]);
    const [todolist, setTodolist] = useState(todoListCopy.current);

    function updateTakInput(event) {
        taskInput.current = event.target.value;
    }

    function addTask() {
        const newTask = {task: taskInput.current, status: false};
        todoListCopy.current.push(newTask);
        setTodolist(todoListCopy.current.slice());
        updateTodoList(todoListCopy.current);
    }

    function removeTask(index) {
        const newTodolist = todolist.filter((item, i) => i !== index);
        setTodolist(newTodolist);
        updateTodoList(newTodolist);
    }

    function updateTaskStatus(index) {
        const newTodolist = todolist.map((item, i) => {
            if (i === index) {
                item.status = !item.status;
            }
            return item;
        });
        setTodolist(newTodolist);
        updateTodoList(newTodolist);
    }

    function findTask() {
        const newTodolist = todoListCopy.current.filter((item) => {
            return item.task.toLowerCase().includes(taskInput.current.toLowerCase());
        });

        setTodolist(newTodolist);
    }

    useEffect(() => {
        getTodolist().then(data => {
            if (data) {
                todoListCopy.current = data;
                setTodolist(data);
            }
        });
    }, []);

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>To-Do List</h1>
            <div className="row g-3 justify-content-center mt-3 mb-3">
                <div className="col-auto">
                    <label for="add-task" className="visually-hidden"></label>
                    <input type="text" onChange={updateTakInput} className="form-control" id="add-task" placeholder="Nome da tarefa" />
                </div>
                <div className="col-auto">
                    <button onClick={findTask} className="btn btn-info mx-1"><i className="bi bi-search"></i></button>
                    <button onClick={addTask} className="btn btn-warning"><i class="bi bi-plus-square-dotted"> <span>Adicionar</span></i>
                    </button>
                </div>
            </div>

            <table className="table table-striped table-hover mt-3">
                <thead>
                <tr>
                    <th scope="col" className="col-1 text-center">
                        <i class="bi bi-check2-square"></i>
                    </th>
                    <th scope="col" className="col-6">Nome da Tarefa</th>
                    <th scope="col" className="col-1 text-center">Ações</th>
                </tr>
                </thead>
                <tbody>
                    {todolist.map((item, index) => {
                        return (
                            <tr key={index} className="align-middle">
                                <td className='text-center'>
                                    <input type="checkbox" onChange={() => updateTaskStatus(index)} checked={item.status} />
                                </td>
                                <td>{
                                    item.status ?
                                        <s>{item.task}</s> :
                                        item.task
                                }</td>
                                <td className='text-center'>
                                    <button className="btn btn-danger" title='Remover tarefa' onClick={() => removeTask(index)}>
                                    <i class="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default App;