import React, {useState} from 'react'


const Count = () => {
    const [count, setCount] = useState(0)
    console.log(`counted`);
    return <>
        <div>{count}</div>
        <button onClick={() => {setCount(count+1)}}>Click here!</button></>

}

export {
    Count,
}