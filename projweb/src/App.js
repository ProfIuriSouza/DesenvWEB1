import './App.css';
import {getTodolist, updateTodoList} from './api';
import React, {useRef, useState, useEffect} from 'react';
import AddOptionToSelect from './components/AddOptionToSelect';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const taskInput = useRef('');
    const [category, setCategory] = useState("")

    const todoListCopy = useRef([]);
    const [todolist, setTodolist] = useState(todoListCopy.current);

    function updateTakInput(event) {
        taskInput.current = event.target.value;
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
        const newTask = {id: (Math.floor(Math.random()*1000)), task: taskInput.current, status: false, category: category};
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
            <Header/>
        <div className='container'>
            <h1 className='text-center mt-5'>To-Do List</h1>
            <div className="row g-3 justify-content-center mt-3 mb-3">
               <div className='row'> 
                <div className="col-7 mx-3">
                    <label for="add-task" className="visually-hidden"></label>
                    <input type="text" onChange={updateTakInput} className="form-control fw-light fst-italic d-inline-block" id="add-task" placeholder="Nome da tarefa" />
                                          
                </div>
                <div className="col-4">
                    <button onClick={findTask} className="btn btn-info mx-3 text-light"><i className="bi bi-search"></i></button>
                    <button onClick={addTask} className="btn btn-secondary text-light"><i class="bi bi-plus-square-dotted"> <span>Adicionar</span></i>
                    </button>
                </div>
                <AddOptionToSelect/> 

                </div>

                
            <div className='row g-2 justify-content-center mb-3'>
            
                <h4 className='text-center'>Todas as tarefas</h4>
            <button type="button" className="col-4 mx-4 btn btn-success btn-lg" title='Realizar Todas as tarefas' onClick={() => checkAllTask(todolist.id)}>
                <i class="bi bi-check-square-fill"></i>
                </button>
                
                <button type="button" className="col-4 mx-4 btn btn-danger btn-lg" title='Remover Todas as tarefas' onClick={() => cleanAllTask(todolist.id)}>
                        <i class="bi bi-trash-fill"></i>
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
                    <th scope="col" className="col-6">Categoria</th>
                    <th scope="col" className="col-1 text-center">Ações</th>
                </tr>
                </thead>
                <br></br>
                <tbody>
                    {todolist.map((item, index) => {
                        return (
                            <tr key={index} className="align-middle">
                                <td className='text-center'>
                                <i class="bi bi-hourglass-split"></i>
                                </td>
                                <td>{
                                    item.status ?
                                        <s>{item.task}</s> :
                                        item.task
                                }</td>
                                <td>{
                                    item.status ?
                                        <s>{item.task}</s> :
                                        item.category
                                }</td>
                                <td className='text-center btn-group'>
                                    <button type="button" className="btn btn-success btn-lg" title='Concluir tarefa' onClick={() => updateTaskStatus(index)}>
                                    <i class="bi bi-check-square-fill"></i>
                                    </button>
                                    <button type="button" className="btn btn-danger btn-lg" title='Remover tarefa' onClick={() => removeTask(index)}>
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
        <div>
        <Footer/>
        </div>
    </div>
    );
}

export default App;