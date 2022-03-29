import { useState } from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {

  const [ favourite , setFavourite] = useState();
  const [ product , setProduct ] = useState();
  const [ categories , setCategories ] = useState();
  const [ isLoading , setIsLoading ] = useState();
  const [ state , dispatch ] = useState();

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/home'element = { product }></Route>
          <Route path='/explore'></Route>
          <Route path='explore/:catId'></Route>
          <Route path='/products/:id'></Route>
          <Route path='/cart'></Route>
          <Route path='/fav'></Route>
          <Route path='/account'></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
