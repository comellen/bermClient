import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import RideCreate from './RideCreate';
import RideTable from './RideTable';
import RideEdit from './RideEdit';
import APIURL from '../helpers/environment';

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

    toggleUpdate = () => {
        this.setState({
            updatePressed: !this.state.updatePressed
        });
    }

    componentWillMount() {
        this.setState({
            updatePressed: false,
        });
        this.fetchRides();
    }

    fetchRides = () => {
        fetch(`${APIURL}/rides/getall`, {
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
        fetch(`${APIURL}/rides/update/${ride.id}`, {
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
        fetch(`${APIURL}/rides/delete/${ride.id}`, {
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
        const rides = this.state.rides.length >= 1 ?
            <RideTable
                setUpdatedRide={this.setUpdatedRide}
                pressed={this.state.updatePressed}
                toggleUpdate={this.toggleUpdate}
                rides={this.state.rides}
                update={this.rideUpdate}
                delete={this.rideDelete} /> :
            <h2>☝️ Log your first ride here.</h2>

        return (
            <div className="rideTable">
                <Button className="addButton" color="success" onClick={this.toggle}>Add a ride</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Ride</ModalHeader>
                    <ModalBody>
                        <RideCreate sessionToken={this.props.sessionToken} fetchRides={this.fetchRides} toggle={this.toggle} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                {rides}

                {
                    this.state.updatePressed ?
                        <Modal isOpen={true}>
                            <ModalHeader>Edit Ride</ModalHeader>
                            <ModalBody>
                                <RideEdit
                                    toggleUpdate={this.toggleUpdate}
                                    update={this.rideUpdate}
                                    ride={this.state.rideToUpdate} />
                            </ModalBody>
                        </Modal> :
                        <div></div>
                }
            </div>
        );
    }
}