import React, { Component } from 'react';
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler } from 'reactstrap';

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
                <Navbar color="faded" light expand="sm">
                    <NavbarBrand href="/">berm</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {(localStorage.getItem('token') != null) ?
                                    <Button onClick={() => this.props.clickLogout()}>Logout</Button> :
                                    <span></span>}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}