import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class RideEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trail: '',
            location: '',
            bike: '',
            time: '00:00:00',
            notes: '',
            date: ''
        };
    }
    componentWillMount() {
        this.setState({
            id: this.props.ride.id,
            trail: this.props.ride.trail,
            location: this.props.ride.location,
            bike: this.props.ride.bike,
            time: this.props.ride.time,
            notes: this.props.ride.notes,
            date: this.props.ride.date
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state);
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}> {/* removed state.modal*/}
                    <ModalHeader>Edit Ride</ModalHeader>  {/*removed toggle*/}
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="trail">Trail</Label>
                                <br />
                                <Input id="trail" type="text" name="trail" value={this.state.trail} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="location">Location</Label>
                                <br />
                                <Input id="location" type="text" name="location" value={this.state.location} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bike">Bike</Label>
                                <br />
                                <Input id="bike" type="text" name="bike" value={this.state.bike} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="time">Time</Label>
                                <br />
                                <Input id="time" type="text" pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}" placeholder="hh:mm:ss" name="time" value={this.state.time} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Date</Label>
                                <br />
                                <Input id="date" type="text" name="date" value={this.state.date} placeholder="YYYY/MM/DD" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="notes">Notes</Label>
                                <br />
                                <textarea rows="3" cols="30" id="notes" type="text" name="notes" value={this.state.notes} onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}