import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import RideCreate from './RideCreate';
import RideTable from './RideTable';
import RideEdit from './RideEdit';

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
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((allRides) => {
                return this.setState({ rides: allRides })
            });
    }

    rideUpdate = (event, ride) => {
        fetch(`http:localhost:3033/rides/update/${ride.id}`, {
            method: 'PUT',
            body: JSON.stringify({ ride: ride }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false });
                this.fetchRides();
            });
    }

    setUpdatedRide = (event, ride) => {
        this.setState({
            rideToUpdate: ride,
            updatePressed: true
        });
    }

    render() {
        return (
            <div>
                <Button color="submit" onClick={this.toggle}>Add a ride</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Ride</ModalHeader>
                    <ModalBody>
                        <RideCreate sessionToken={this.props.sessionToken} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <RideTable rides={this.state.rides} />
                {this.state.updatePressed ?
                    <RideEdit t={this.state.updatePressed} update={this.rideUpdate} workout={this.state.rideToUpdate} /> :
                    <div></div>}
            </div>
        );
    }
}