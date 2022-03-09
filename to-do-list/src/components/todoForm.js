import React , {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [todo , setTodo] = useState({
        task: "" ,
        completed: false
    })

    const handleInputChange = (e) => {
        setTodo({...todo , task: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo});
            setTodo({...todo , task: ''})
        }
    }
 
    return (
        <form onSubmit={handleSubmit}>
        <input 
            onChange = {handleInputChange}
            value = {todo.task}>
        </input>
        <button type='submit' >submit</button>
        </form>
    );
}

export default TodoForm