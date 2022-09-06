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
  Canvas,
  Wishlist,
  Settings,
} from './pages';
import { Routes, Route, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import UserForm from './pages/UserForm';
import { UserContext } from './utils/UserContext';
import {AnimatePresence} from 'framer-motion';

function App() {
  const [userToken, setUserToken] = useState(null);
  const [userContextValue, setUserContextValue] = useState('');

  //getUser will update the global user context after there is a user that is signed in
  const [getUser, { error, loading, data }] = useLazyQuery(GET_USER);
  if (error) throw new ApolloError();
  useEffect(() => {
    // grabbing token from localstorage
    const token = localStorage.getItem('id_token');

    // if there isnt a token, break outta this
    if (!token) {
      return;
    }
    //if there is a token, then get user
    getUser({ variables: { userID: AuthService.getProfile().data._id } });
    // if it didn't break out, then decode and set to user
    const decoded = decode(token);
    setUserToken({
      ...userToken,
      token: decoded,
    });
  }, []);

  useEffect(() => {
    if (data && loading === false) {
      setUserContextValue(data);
    }
  }, [data]);
  // setUserContextValue(data);
  //123
  // // UserContext;

  const location = useLocation();
  return (
    <>
      <UserContext.Provider value={{ userContextValue, setUserContextValue }}>
        <Header userTokenData={userToken} />
        <main className="mainPage">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
              <Route exact path="/pixi" element={<Canvas />} />
              <Route exact path="/wishlist" element={<Wishlist />} />
              <Route exact path="/settings" element={<Settings />} />
              {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
            </Routes>
          </AnimatePresence>
        </main>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
