import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import {Landing, Pokemon, Random, ComputerParts} from './pages'

function App() {
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
