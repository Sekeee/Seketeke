import { useEffect, useState } from 'react';
import '../firebase';
import { db } from '../firebase';
import {collectionName} from './todoForm'


const Todo = ({todo}) => {

    useEffect(() => {
        db.collection(collectionName).doc()
        .onSnapshot((doc) => {
        console.log(doc.data);
        })
    } , [])
   
    const [ data , setData ] = useState([  ])

    db.collection(collectionName).doc().get()
    .then(() => {

    })

    return (
        <div style ={{ display : 'flex'}}>
            <input type = 'checkbox'/>
            <li>{todo.task}</li>
            <button> delete </button>
        </div>
    );
}

export default Todo