import React, { Component } from 'react';
import { Button, Container, Col, Modal, ModalBody, ModalHeader, ModalFooter, Row } from 'reactstrap';
import TrailCreate from './TrailCreate';

export default class TrailIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trails: [],
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
        this.fetchTrails();
    }

    fetchTrails = () => {
        fetch('http://localhost:3033/trails/getall', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((allTrails) => {
                return this.setState({ trails: allTrails })
            });
    }

    render() {
        return (
            <div>
                <Button color="submit" onClick={this.toggle}>Add a trail</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Trail</ModalHeader>
                    <ModalBody>
                        <TrailCreate token={this.props.token} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}