import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './App.css';
import './animate.css';

import NavBar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

// REDUCERS
import language from './Reducers/language.reducer';

const store = createStore(combineReducers({ language }));

class App extends Component {
  constructor(props) {
    super(props);

    // TOGGLE NAV BAR ON SCROLL
    let prevScrollpos = window.pageYOffset;
    const { clientWidth } = document.documentElement;

    if (clientWidth > 768) {
      window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navbar').style.top = '0';
        } else {
          document.getElementById('navbar').style.top = '-5em';
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <NavBar id="navbar" />
            <Home />
            <AboutMe />
            <Skills />
            <Portfolio />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
