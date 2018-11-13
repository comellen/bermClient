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
            modal: false,
            updatePressed: false,
            rideToUpdate: {},
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentWillMount() {
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

    rideDelete = (event, ride) => {
        fetch(`http:localhost:3033/rides/delete/${ride.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ ride: ride }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(res => this.fetchRides());
    }

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>Add a ride</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Ride
                    </ModalHeader>
                    <ModalBody>
                        <RideCreate sessionToken={this.props.sessionToken} fetchRides={this.fetchRides} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <RideTable rides={this.state.rides} />

                {
                    this.state.updatePressed ?
                        <RideEdit
                            t={this.state.updatePressed}
                            update={this.rideUpdate}
                            ride={this.state.rideToUpdate} /> :
                        <div></div>
                }
            </div>
        );
    }
}