import './Todo.css';

export default function Todo({todo, removeTodo, completeTodo}){

    return(
        <>
        <div className="todo" 
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">{todo.category}</p>
            </div>
        </div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>Check</button>
        <button className="notcomplete" onClick={() => removeTodo(todo.id)}>X</button>
        </>
    )
}