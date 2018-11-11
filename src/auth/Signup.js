import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../App.css';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            owner: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3033/user/signup', {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((response) => response.json())
            .then((data) => {
                this.props.setToken(data.sessionToken);
                // localStorage.setItem('owner', this.data.user.id);
            });
    }
    render() {
        return (
            <div>
                <h1 className="authH">SIGN UP</h1>
                <Form className="signup" onSubmit={this.handleSubmit}>
                    <FormGroup className="authInputs">
                        <Label for="email">EMAIL</Label>
                        <br />
                        <Input id="signupEmail" type="email" name="email" placeholder="you@email.com" onChange={this.handleChange} />
                    </FormGroup>
                    <br />
                    <FormGroup className="authInputs">
                        <Label for="password">PASSWORD</Label>
                        <br />
                        <Input id="signupPassword" type="password" name="password" placeholder="*********" onChange={this.handleChange} />
                    </FormGroup>
                    <br />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}