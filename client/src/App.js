import { useState, useEffect } from 'react';
import { Header, Footer, ShoppingCart } from './components';
import { Landing, Pokemon, Random, ComputerParts } from './pages';
import { Routes, Route } from 'react-router-dom';
import decode from 'jwt-decode';

// update from gunnars ugly code to be consistent ??
import UserForm from './pages/UserForm';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // grabbing token from localstorage
    const token = localStorage.getItem('id_token');

    // if there isnt a token, break outta this
    if (!token) {
      return;
    }

    // if it didn't break out, then decode and set to user
    const decoded = decode(token);
    setUser({
      ...user,
      token: decoded,
    });
  }, []);

  return (
    <>
      <Header />
        <main className="mainPage">
          <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/pokemon" element={<Pokemon />} />
              <Route exact path="/computer" element={<ComputerParts />} />
              <Route exact path="/random" element={<Random />} />
              <Route exact path="/sign-in" element={<UserForm setUser={setUser} />} />
              <Route exact path="/cart" element={<ShoppingCart />} />
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          </Routes>
        </main>
      <Footer />
    </>
  );
}

export default App;
