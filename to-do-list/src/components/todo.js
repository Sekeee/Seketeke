import React from 'react';

const Todo = (todo) => {
    return (
        <div style ={{ display : 'flex'}}>
            <input type = 'checkbox'/>
            <li>{todo.task}</li>
            <button> delete </button>
        </div>
    );
}

export default Todo