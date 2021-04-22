import React from 'react';
import './App.scss'
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
