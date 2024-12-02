import './Todo.css';
import Button from 'react-bootstrap/Button';

export default function Todo({todo, removeTodo, completeTodo}){

        if(Object.keys(todo).length > 0){
    return(
        <>
         
        <div className="todo" 
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">{todo.category}</p>
            </div>
        </div>
        
        <Button variant="outline-success" onClick={() => completeTodo(todo.id)}>Check</Button>
        <Button variant="outline-danger" onClick={() => removeTodo(todo.id)}>X</Button>
    

</>
    )
} <></>
}