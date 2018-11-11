import React, { Component } from 'react';
import { Button, Container, Col, Modal, ModalBody, ModalHeader, ModalFooter, Row } from 'reactstrap';
import RideCreate from './RideCreate';

export default class RideIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: [],
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {  //changed from WillMount
        this.fetchRides();
    }

    fetchRides = () => {
        fetch('http://localhost:3033/rides/getall', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((allRides) => {
                return this.setState({ rides: allRides })
            });
    }

    render() {
        return (
            <div>
                <Button color="submit" onClick={this.toggle}>Add a ride</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Ride</ModalHeader>
                    <ModalBody>
                        <RideCreate token={this.props.token} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}