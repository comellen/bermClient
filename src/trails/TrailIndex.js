import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import TrailCreate from './TrailCreate';
import TrailTable from './TrailTable';
import TrailEdit from './TrailEdit';


export default class TrailIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trails: [],
            modal: false,
            updatePressed: false,
            trailToUpdate: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentWillMount() {  //changed from WillMount
        this.fetchTrails();
    }

    fetchTrails = () => {
        fetch('http://localhost:3033/trails/getall', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((allTrails) => {
                return this.setState({ trails: allTrails })
            });
    }

    trailUpdate = (event, trail) => {
        fetch(`http:localhost:3033/trails/update/${trail.id}`, {
            method: 'PUT',
            body: JSON.stringify({ trail: trail }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false });
                this.fetchTrails();
            });
    }

    setUpdatedTrail = (event, trail) => {
        this.setState({
            trailToUpdate: trail,
            updatePressed: true
        });
    }

    render() {
        return (
            <div>
                <Button color="submit" onClick={this.toggle}>Add a trail</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Trail</ModalHeader>
                    <ModalBody>
                        <TrailCreate sessionToken={this.props.sessionToken} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <TrailTable trails={this.state.trails} />
                {this.state.updatePressed ?
                <TrailEdit t={this.state.updatePressed} update={this.trailUpdate} workout={this.state.trailToUpdate} /> :
                <div></div>}
            </div>
        );
    }
}