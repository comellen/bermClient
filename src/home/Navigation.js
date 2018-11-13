import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import Home from './Home';
import BikeIndex from '../bikes/BikeIndex';
import TrailIndex from '../trails/TrailIndex';
import RideIndex from '../rides/RideIndex';
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
                        <NavbarBrand className="logo" href="/">berm</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <Link to="/rides"><span className="navLink">Rides</span></Link>
                                <Link to="/trails"><span className="navLink">Trails</span></Link>
                                <Link to="/bikes"><span className="navLink">Bikes</span></Link>
                                <NavItem>
                                    {(localStorage.getItem('token') != null) ?
                                        <Button onClick={() => this.props.clickLogout()}>Logout</Button> :
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