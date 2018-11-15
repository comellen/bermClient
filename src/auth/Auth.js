import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Auth.css';
import Login from './Login';
import Signup from './Signup';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signingUp: true
        };
    }

    switchClick = () => {
        this.setState({ signingUp: !this.state.signingUp });
    }

    render() {
        return (
            <Container className="authWrapper">
            <div className="bermInfo">
                <span>
                <h1 className="bigLogo">berm</h1>
                <h3>Track your mountain biking journey with <span className="logoText">berm</span>. Keep track of your bikes and upgrades, add the collection of trails you've ridden and trails you want to ride,  and keep track of and update your trail times.</h3>
                </span>
                </div>
                <div className="authContainer">
                    <div className="authDiv">
                        {(this.state.signingUp) ?
                            <Signup setToken={this.props.setToken} /> :
                            <Login setToken={this.props.setToken} />}
                    </div>
                    <p className="regText">
                        {(this.state.signingUp) ?
                            <span>Have an account? Login <a href="#" onClick={this.switchClick}>here</a>.</span> :
                            <span>Register for an account <a href="#" onClick={this.switchClick}>here</a>.</span>}
                    </p>
                </div>
            </Container>
        );
    }
}
