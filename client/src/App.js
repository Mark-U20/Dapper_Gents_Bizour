import { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Header from './components/Header';

import Navbar from './components/Navbar';
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
    <Router>
      <>
        <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/pokemon' component={Pokemon} />
          <Route exact path='/computer' component={ComputerParts} />
          <Route exact path='/random' component={Random} />
          {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
      </>
    </Router>
      <Footer />
    </>
  );
}

export default App;
