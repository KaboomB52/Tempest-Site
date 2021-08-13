import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import Servers from './components/Pages/Servers'
import Signup from './components/Pages/Signup'
import Staff from './components/Pages/Staff'

// Router is used to connect urls to different pages, one is required for each link.

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/servers" component={Servers} />
          <Route path="/signup" component={Signup} />
          <Route path="/staff" component={Staff} />
      </Router>

    </div>
  );
}

export default App;
