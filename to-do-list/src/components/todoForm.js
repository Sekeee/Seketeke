import React, { useState } from 'react'
import '../firebase';
import { db } from '../firebase';

export const collectionName = 'todo';
const TodoForm = ({ addTodo }) => {


    const [todo, setTodo] = useState({
        task: "",
    })

    const handleInputChange = (e) => {
        setTodo({ ...todo, task: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            db.collection(collectionName).add({
                task: todo,
                checkbox: false
            })
            .then((docRef) => {
                console.log(`document written ID :` , docRef.id);
            })

            addTodo({ ...todo });
            setTodo({ ...todo, task: '' })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleInputChange}
                value={todo.task}>
            </input>
            <button type='submit' >submit</button>
        </form>
    );
}

export default TodoForm