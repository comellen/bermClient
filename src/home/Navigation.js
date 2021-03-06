import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Collapse, Nav, Navbar, NavItem, NavbarToggler } from 'reactstrap';
import './Navigation.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Navbar className="navBar" light expand="sm">
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <a className="logo" href="/">berm</a>
                        <NavbarToggler onClick={this.toggle} />
                            <Nav className="ml-auto" navbar>
                                <Link to="/rides"><span className="navLink">Rides</span></Link>
                                <Link to="/trails"><span className="navLink">Trails</span></Link>
                                <Link to="/bikes"><span className="navLink">Bikes</span></Link>
                                <NavItem>
                                    {(localStorage.getItem('token') != null) ?
                                        <Button className="logout" onClick={() => this.props.clickLogout()}>Logout</Button> :
                                        <span></span>}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}