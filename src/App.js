import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Page404 from './page404/page404';

class App extends Component {

  state = {};

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <div style={{height: '100%'}}>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route component={Page404}/>
              </Switch>
            </div>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
