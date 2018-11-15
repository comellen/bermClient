import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './auth/Auth';
import Navigation from './home/Navigation';
import Home from './home/Home';
import BikeIndex from './bikes/BikeIndex';
import RideIndex from './rides/RideIndex';
import TrailIndex from './trails/TrailIndex';

export default class App extends Component {
  constructor() {
    super();

    this.setToken = (token) => {
      localStorage.setItem('token', token);
      this.setState({ sessionToken: token });
    };

    this.state = {
      sessionToken: '',
      setToken: this.setToken
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({
      sessionToken: ''
    });
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <div>
          <Navigation clickLogout={this.logout} />
          <Switch>
            <Route exact path="/">
              <Home sessionToken={this.state.sessionToken} />
            </Route>
            <Route path="/rides">
              <RideIndex sessionToken={this.state.sessionToken} />
            </Route>
            <Route path="/trails">
              <TrailIndex sessionToken={this.state.sessionToken} />
            </Route>
            <Route path="/bikes">
              <BikeIndex sessionToken={this.state.sessionToken} />
            </Route>
          </Switch>
        </div>
      );
    } else {
      return (
        <Route path="/auth">
          <Auth setToken={this.setSessionState} />
        </Route>
      );
    }
  }


  render() {
    return (
      <div>
        <Router>
            {this.protectedViews()}
        </Router>
      </div>
    );
  }
}