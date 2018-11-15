import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import TrailCreate from './TrailCreate';
import TrailTable from './TrailTable';
import TrailEdit from './TrailEdit';
import APIURL from '../helpers/environment';

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

    toggleUpdate = () => {
        this.setState({
            updatePressed: !this.state.updatePressed
        });
    }

    componentWillMount() {
        this.setState({
            updatePressed: false
        });
        this.fetchTrails();
    }

    fetchTrails = () => {
        fetch(`${APIURL}/trails/getall`, {
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
        fetch(`${APIURL}/trails/update/${trail.id}`, {
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

    trailDelete = (event, trail) => {
        fetch(`${APIURL}/trails/delete/${trail.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ trail: trail }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then(res => this.fetchTrails());
    }

    render() {
        const trails = this.state.trails.length >= 1 ?
            <TrailTable
                setUpdatedTrail={this.setUpdatedTrail}
                pressed={this.state.updatePressed}
                toggleUpdate={this.toggleUpdate}
                trails={this.state.trails}
                update={this.trailUpdate}
                delete={this.trailDelete} /> :
            <h2>☝️ Enter a trail for your list.</h2>

        return (
            <div className="indexes">
                <Button className="addButton" color="success" onClick={this.toggle}>Add a trail</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Trail</ModalHeader>
                    <ModalBody>
                        <TrailCreate sessionToken={this.props.sessionToken} fetchTrails={this.fetchTrails} toggle={this.toggle} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                {trails}

                {
                    this.state.updatePressed ?
                        <Modal isOpen={true}>
                            <ModalHeader>Edit Trail</ModalHeader>
                            <ModalBody>
                                <TrailEdit
                                    pressed={this.state.updatePressed}
                                    update={this.trailUpdate}
                                    trail={this.state.trailToUpdate} />
                            </ModalBody>
                        </Modal> :
                        <div></div>
                }
            </div>
        );
    }
}