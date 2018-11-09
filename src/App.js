import React, { Component } from 'react';
import Auth from './auth/Auth';
import Navigation from './home/Navigation';
import Home from './home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();

    this.setToken = (token) => {
      localStorage.setItem('token', token);
      this.setState({ sessionToken: token });
    }

    this.state = {
      sessionToken: '',
      setToken: this.setToken
    }
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
          <Route path="/" exact>
            <Home sessionToken={this.state.sessionToken} />
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
      <Router>
        <div>
          <Navigation clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}