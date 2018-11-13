import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../App.css';
import APIURL from '../helpers/environment';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => response.json())
        .then((data) => this.props.setToken(data.sessionToken));
    }

    render() {
      return (
        <div>
            <h1 className="authH">LOGIN</h1>
            <Form className="login" onSubmit={this.handleSubmit}>
                <FormGroup className="authInputs">
                    <Label for="email">EMAIL</Label>
                    <br />
                    <Input id="loginEmail" type="email" name="email" placeholder="you@email.com" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="authInputs">
                    <Label for="password">PASSWORD</Label>
                    <br />
                    <Input id="loginPass" type="password" name="password" placeholder="*********" onChange={this.handleChange} />
                </FormGroup>
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        </div>
      );
    }
  }