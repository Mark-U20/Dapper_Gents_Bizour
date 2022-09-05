import { useState, useEffect } from 'react';
import { Header, Footer, Product } from './components';
import {
  Landing,
  Pokemon,
  Random,
  ComputerParts,
  ShoppingCart,
  Pixi,
} from './pages';
import { Routes, Route } from 'react-router-dom';
import decode from 'jwt-decode';

// update from gunnars ugly code to be consistent ??
import UserForm from './pages/UserForm';
import Checkout from './pages/Checkout';

function App() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    // grabbing token from localstorage
    const token = localStorage.getItem('id_token');

    // if there isnt a token, break outta this
    if (!token) {
      return;
    }

    // if it didn't break out, then decode and set to user
    const decoded = decode(token);

    console.log(decoded)
    console.log(userToken)
    setUserToken({
      ...userToken,
      token: decoded
    });

    
  }, []);


  console.log(userToken)
  return (
    <>
      <Header userTokenData={userToken} />
      <main className="mainPage">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/pokemon" element={<Pokemon />} />
          <Route exact path="/computer" element={<ComputerParts />} />
          <Route exact path="/random" element={<Random />} />
          <Route path="/products/:id" element={<Product />} />
          <Route
            exact
            path="/sign-in"
            element={<UserForm setUser={setUserToken} />}
          />
          <Route exact path="/cart" element={<ShoppingCart />} />
          <Route exact path="/checkout" element={''} />
          <Route exact path="/pixi" element={<Pixi />} />

          {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
        </Routes>
        {/* <canvas id="container"></canvas>{' '} */}
      </main>
      <Footer />
    </>
  );
}

export default App;
