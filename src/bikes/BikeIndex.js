import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import BikeCreate from './BikeCreate';
import BikeCards from './BikeCards';
import BikeEdit from './BikeEdit';
import APIURL from '../helpers/environment';

export default class BikeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: [],
            modal: false,
            updatePressed: false,
            bikeToUpdate: {},
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentWillMount() {
        this.fetchBikes();
    }

    fetchBikes = () => {
        fetch(`${APIURL}/bikes/getall`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((allBikes) => {
                return this.setState({ bikes: allBikes })
            });
    }

    bikeUpdate = (event, bike) => {
        fetch(`${APIURL}/bikes/update/${bike.id}`, {
            method: 'PUT',
            body: JSON.stringify({ bike: bike }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false });
                this.fetchBikes();
            });
    }

    setUpdatedBike = (event, bike) => {
        this.setState({
            bikeToUpdate: bike,
            updatePressed: true
        });
    }

    bikeDelete = (event, bike) => {
        fetch(`${APIURL}/bikes/delete/${bike.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ bike: bike }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(res => this.fetchBikes());
    }
    render() {
        return (
            <div>
                <Button color="submit" onClick={this.toggle}>Add a bike</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Bike
                    </ModalHeader>
                    <ModalBody>
                        <BikeCreate sessionToken={this.props.sessionToken} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                {/* <BikeCards bikes={this.state.bikes} /> */}

                {
                    this.state.updatePressed ?
                        <BikeEdit
                            t={this.state.updatePressed}
                            update={this.bikeUpdate}
                            bike={this.state.bikeToUpdate} /> :
                        <div></div>
                }
            </div>
        );
    }
}