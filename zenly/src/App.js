import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import MapApi from "./components/MapAPI";
import Login from './components/Login'


function App() {

  const [ user , setUser ] = useState(null);
  const [isLoading , setIsLoading ] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth , (user) => {
      if(user){
        setUser({
          uid: user.uid,
          phoneNumber: user.phoneNumber,
          email: user.email,
          displayName: user.displayName
        });
      } else {
        setUser(null);
      }
      setIsLoading(false); 
    });
  } , [])

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(!user){
    return <Login />
  }
  return <MapApi />
  
}

export default App;
