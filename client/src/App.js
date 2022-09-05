import { useState, useEffect } from 'react';
import { ApolloError, useLazyQuery } from '@apollo/client';
import { GET_USER } from './utils/queries';
import AuthService from './utils/auth';
import { Header, Footer, Product } from './components';
import {
  Landing,
  Pokemon,
  Random,
  ComputerParts,
  ShoppingCart,
  Pixi,
  Wishlist,
  Settings,
} from './pages';
import { Routes, Route } from 'react-router-dom';
import decode from 'jwt-decode';
import UserForm from './pages/UserForm';
import { UserContext } from './utils/UserContext';

function App() {
  const [userToken, setUserToken] = useState(null);
  const [userContextValue, setUserContextValue] = useState('');

  const [getUser, { error, loading, data }] = useLazyQuery(GET_USER);
  if (error) throw new ApolloError();
  // console.log(AuthService.getProfile().data._id);
  useEffect(() => {
    // grabbing token from localstorage
    const token = localStorage.getItem('id_token');

    // if there isnt a token, break outta this
    if (!token) {
      return;
    }
    //if there is a token, then get user
    getUser({ variables: { userID: AuthService.getProfile().data._id } });
    console.log('being used');
    // if it didn't break out, then decode and set to user
    const decoded = decode(token);

    console.log(decoded);
    console.log(userToken);
    setUserToken({
      ...userToken,
      token: decoded,
    });
  }, []);

  useEffect(() => {
    console.log('data was changed');
    console.log(data);
    if (data && loading === false) {
      console.log(data);
      setUserContextValue(data);
    }
  }, [data]);
  // setUserContextValue(data);
  // // UserContext;
  return (
    <>
      <UserContext.Provider value={{ userContextValue, setUserContextValue }}>
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
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/settings" element={<Settings />} />
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          </Routes>
        </main>
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App;
