import React from 'react';
<<<<<<< HEAD
import './app.css';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router, Switch, Link} from 'react-router-dom';

import Preloader from './components/preloader.js'
import Homepage from './components/homepage.js'
=======
import './App.css';
import Routes from './Routes';
import { BrowserRouter  as Router} from 'react-router-dom';
>>>>>>> 63a084c3e6781288307ba4983f9fee12f00d60d2

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
