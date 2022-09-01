import { useState, useEffect } from 'react';
import {Header, Footer, ShoppingCart} from './components';
import {Landing, Pokemon, Random, ComputerParts} from './pages'
import { Routes, Route } from 'react-router-dom';
import decode from 'jwt-decode';

function App() {
  // const [user, setUser] = useState(null);


  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (!token) {
  //     return;
  //   }

  //   const decoded = decode(token);
  // }, []);

  return (
    <>
      <Header />
        <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='/pokemon' element={<Pokemon />} />
              <Route exact path='/computer' element={<ComputerParts />} />
              <Route exact path='/random' element={<Random />} />
              <Route exact path='/cart' element={<ShoppingCart />} />
              {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
        </Routes>
      <Footer />
    </>
  );
}

export default App;
