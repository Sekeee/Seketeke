import './App.css';
import {useState} from 'react';



function App() {
  let [ countRed , setCountRed ] = useState(50);
  let [ countBlue , setCountBlue ] = useState(50);

  // let [ state , setState ] = useState({red , blue})
  // let {red , blue} = state
  
  // const handleClickRed = () => {
  //   setState({...state , red:red+1})
  //   setState({...state , blue:blue-1})
  // }
  
  // const handleClickBlue = () => {
  //   setState({...state , red:red-1})
  //   setState({...state , blue:blue+1})
  // }
  


  const handleRedClick = () => {
    setCountRed(countRed + 1)
    setCountBlue(countBlue - 1)
    console.log('red:' , countRed , 'blue:', countBlue);
    
  }
  
  const handleBlueClick = () => {
    setCountRed(countRed - 1)
    setCountBlue(countBlue + 1)
    console.log('red:' , countRed , 'blue:', countBlue);
    
  }

  return (
    <>
      <h1>RED BLUE BATTLE</h1>
        <div className = "scoreContainer">
            <div className = "score">{countRed}</div>
            <div className = "score">{countBlue}</div>
        </div>
      <div className = "battleContainer">
          <div className = "redSide" onClick = {handleRedClick} style={{width: countRed+"vw"}}></div>
          <div className = "blueSide" onClick = {handleBlueClick} style={{width: countBlue+"vw"}}></div>
      </div>
    </>
  );
}

export default App;
