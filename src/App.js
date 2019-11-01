import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Redirect exact from="/home" to="/" />
              <Route exact path="/" component={ Home } />
              <Route path="/about" component={ About } />
              <Route path="/contact" component={ Contact } />
              <Route path="/:postId" component={ Post } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
