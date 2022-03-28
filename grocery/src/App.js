import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/home'></Route>
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
