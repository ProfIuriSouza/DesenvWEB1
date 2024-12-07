import './App.css';
import {getTodolist, updateTodoList} from './api';
import React, {useRef, useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PomodoroTimer from './components/PomodoroTimer';

function App() {
    const taskInput = useRef('');
    const categoryInput = useRef('');

    const todoListCopy = useRef([]);
    const [todolist, setTodolist] = useState(todoListCopy.current);

    function updateTakInput(event) {
        taskInput.current = event.target.value;
    }

    function updateCategoryInput(event) {
        categoryInput.current = event.target.value;
    }

    function cleanAllTask(index){
        const newTodolist = todolist.filter((item, i) => index !== index);
        
        setTodolist(newTodolist);
        updateTodoList(newTodolist);
        todoListCopy.current = newTodolist;
    }

    function checkAllTask(index){
        const newTodolist = todolist.map((item, i) => {
            if (item.status === false) {
                item.status = !item.status;
            }
            return item;
        });
        setTodolist(newTodolist);
        updateTodoList(newTodolist);
    }

    function addTask() {
        const newTask = {id: (Math.floor(Math.random()*1000)), task: taskInput.current, status: false, category: categoryInput.current};
        todoListCopy.current.push(newTask);
        setTodolist(todoListCopy.current.slice());
        updateTodoList(todoListCopy.current);
    }

    function removeTask(index) {
        const newTodolist = todolist.filter((item, i) => i !== index);
        setTodolist(newTodolist);
        updateTodoList(newTodolist);
        todoListCopy.current = newTodolist;
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

    function findCategory() {
        const newTodolist = todoListCopy.current.filter((item) => {
            return item.category.toLowerCase().includes(categoryInput.current.toLowerCase());
        });

        setTodolist(newTodolist);
    }
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        getTodolist().then(data => {
            if (data) {
                todoListCopy.current = data;
                setTodolist(data);
            }
        });
    }, []);

    return (
        <div className='backgroud font-text'>
            <Header isLogged={isLogged} setIsLogged={setIsLogged} />
            <div className='container mb-4'>
                <h1 className='text-center mt-5'>To-Do List</h1>
                <div className="row g-3 justify-content-center mt-3 mb-3">
                <div className='row'>
                    <div className="col-7 mx-3">
                    <label htmlFor="add-task" className="visually-hidden"></label>
                    <input type="text" onChange={updateTakInput} className="my-3 form-control fw-light fst-italic d-inline-block" id="add-task" placeholder="Nome da tarefa" />
                    <label htmlFor="add-category" className="visually-hidden"></label>
                    <input type="text" onChange={updateCategoryInput} className="form-control fw-light fst-italic d-inline-block" id="add-category" placeholder="Grupo de tarefa" />
                    </div>
                    <div className="col-4">
                    <button onClick={findTask} className="btn btn-info my-3 mx-3 text-light">
                        <i className="bi bi-search"></i>
                    </button>

                    <button onClick={addTask} className="btn btn-secondary text-light" disabled={!isLogged}>
                        <i className="bi bi-plus-square-dotted">
                        <span> Adicionar</span>
                        </i>
                    </button>
                    
                    <button onClick={findCategory} className="mx-3 btn btn-info text-light">
                        <i className="bi bi-search"></i>
                    </button>
                    </div>
                </div>
                <div className='row g-2 justify-content-end mb-1'>
                    <PomodoroTimer />
                    <button type="button" className="col-1 btn btn-success btn-lg" title='Realizar Todas as tarefas' onClick={()=> checkAllTask(todolist.id)}> <i className="bi bi-check-square-fill"></i>
                    </button>
                    <button type="button" className="col-1 btn btn-danger btn-lg" title='Remover Todas as tarefas' onClick={()=> cleanAllTask(todolist.id)}> <i className="bi bi-trash-fill"></i>
                    </button>
                </div>
                </div>
                <table className="table table-striped table-hover mt-3">
                <thead>
                    <tr>
                    <th scope="col" className="col-1 text-center">
                        <i className="bi bi-check2-square"></i>
                    </th>
                    <th scope="col" className="col-6">Nome da Tarefa</th>
                    <th scope="col" className="col-6">Categoria</th>
                    <th scope="col" className="col-1 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody> {todolist.map((item, index) => { return ( <tr key={index} className="align-middle">
                    <td className='text-center'>
                        <i className="bi bi-hourglass-split"></i>
                    </td>
                    <td>{ item.status ? <s>{item.task}</s> : item.task } </td>
                    <td>{ item.status ? <s>{item.category}</s> : item.category } </td>
                    <td className='text-center btn-group'>
                        <button type="button" className="btn btn-success btn-lg" title='Concluir tarefa' onClick={()=> updateTaskStatus(index)}> <i className="bi bi-check-square-fill"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-lg" title='Remover tarefa' onClick={()=> removeTask(index)}> <i className="bi bi-trash-fill"></i>
                        </button>
                    </td>
                    </tr> ) } )} </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default App;