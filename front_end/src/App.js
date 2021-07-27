import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Link} from 'react-router-dom';

import Preloader from './components/preloader.js'
import Homepage from './components/homepage.js'
import { BrowserRouter  as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Preloader /> */}
      <Homepage />
      </Switch>
    </Router>
  );
}

export default App;