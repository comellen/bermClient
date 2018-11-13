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
        <Switch>
          <Route exact path="/">
            <div>
              <Navigation clickLogout={this.logout} />
              <Home sessionToken={this.state.sessionToken} />
            </div>
          </Route>
          <Route path="/rides">
            <div>
              <Navigation clickLogout={this.logout} />
              <RideIndex sessionToken={this.state.sessionToken} />
            </div>
          </Route>
          <Route path="/trails">
            <div>
              <Navigation clickLogout={this.logout} />
              <TrailIndex sessionToken={this.state.sessionToken} />
            </div>
          </Route>
          <Route path="/bikes">
            <div>
              <Navigation clickLogout={this.logout} />
              <BikeIndex sessionToken={this.state.sessionToken} />
            </div>
          </Route>
        </Switch>
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
          <div>
            {this.protectedViews()}
          </div>
        </Router>

      </div>
    );
  }
}