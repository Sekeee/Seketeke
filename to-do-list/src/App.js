
import './App.css';
import Todo from './todo'

function App() {

  // let [state , setState] = useState(0)

  const renderToDo = () => {
    console.log(<Todo></Todo>);
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      <div className='input-container'>
        <input></input>
        <button onClick = {renderToDo}>Add</button>
      </div>
      <div className='line'></div>
      <Todo></Todo>
    </>
  );
}

export default App;
