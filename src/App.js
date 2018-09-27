import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from './app.css';

import MenuContainer from './containers/MenuContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import About from './component/About/About'
import Skill from './component/Skill/Skill'
import Contact from './component/Contact/Contact'

class App extends Component {

  render() {

    return (
      <Router >
        <div className={ styles.app }>
          <MenuContainer />
          <Switch>
            <Route path="/portfolio" component={PortfolioContainer}/>
            <Route path="/Skill" component={ Skill }/>
            <Route path="/about" component={ About }/>
            <Route path="/contact" component={ Contact }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
