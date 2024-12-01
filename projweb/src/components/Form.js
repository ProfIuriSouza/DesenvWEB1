import './Form.css';
import { useState } from 'react';

export default function Form({addTodo}){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !category) return;
        addTodo(title,category);
        setTitle("");
        setCategory("");


    }

    return(
        <div>
             <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Insira sua Tarefa' onChange={(e) => setTitle(e.target.value)} />
        <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria/option</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>

     
        </div>
    )
}