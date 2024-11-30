
export default function Todo(props){

    return(
        <>
        <div className="todo">
            <div className="content">
                <p>{props.task}</p>
                <p className="category">{props.category}</p>
            </div>
        </div>
        <button>Check</button>
        <button>X</button>
        </>
    )
}