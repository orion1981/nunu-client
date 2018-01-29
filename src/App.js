import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';


import Login from './containers/Login';
import LocationList from './containers/LocationList';
import PackagingList from './containers/PackagingList';
import ProductionBreakdown from './containers/ProductionBreakdown';
import SingleLocation from './containers/SingleLocation';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/Login" render={() =><Login />}/>
            <Route path="/LocationList" render={() =><LocationList />}/>
            <Route path="/PackagingList" render={() =><PackagingList />}/>
            <Route path="/ProductionBreakdown" render={() =><ProductionBreakdown />}/>
            <Route path="/Single Location" render={() =><SingleLocation />}/>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
              <Link to="/login" ><Container><Button className="Homepage-button" size="massive" color="blue">Login</Button></Container></Link>
                <br/>
              <Link to="/LocationList" ><Container><Button className="Homepage-button" size="massive" color="blue">Location List</Button></Container></Link>
                <br/>
              <Link to="/PackagingList" ><Container><Button className="Homepage-button" size="massive" color="blue">Packaging List</Button></Container></Link>
                <br/>
              <Link to="/ProductionBreakdown" ><Container><Button className="Homepage-button" size="massive" color="blue">Production Breakdown</Button></Container></Link>
                <br/>
              <Link to="/SingleLocation" ><Container><Button className="Homepage-button" size="massive" color="blue">Single Location</Button></Container></Link>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
