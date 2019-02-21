import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Reservation from './components/Reservation/Reservation';
import Default from './components/Default';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Dashboard }/>
          <Route  path = '/details' component = {Details}/>
          <Route  path = '/reservation' component = {Reservation}/>
          <Route  component = {Default}/> {/* shows error message if page not found */}
        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
