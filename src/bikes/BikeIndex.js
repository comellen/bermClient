import React, { Component } from 'react';
import { Button, Container, Col, Modal, ModalBody, ModalHeader, ModalFooter, Row } from 'reactstrap';
import BikeCreate from './BikeCreate';

export default class BikeIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bikes: [],
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
        this.fetchBikes();
    }

    fetchBikes = () => {
        fetch('http://localhost:3033/bikes/getall', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((allBikes) => {
                return this.setState({ bikes: allBikes })
            });
    }

    render() {
        return (
            <div>
                <Button color="submit" onClick={this.toggle}>Add a bike</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Bike</ModalHeader>
                    <ModalBody>
                        <BikeCreate />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}