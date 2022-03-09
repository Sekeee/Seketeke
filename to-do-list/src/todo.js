import './todo.css'

function Todo(text){
    return (
        <div className='todo-container'>
            <input style={{type: "checkbox"}} className = "checkbox"></input>
            <div className='text'>Wash dishes</div>
            <button>Delete</button>
        </div>
        
    )
}

export default Todo