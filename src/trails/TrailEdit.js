import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class TrailEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            location: '',
            length: '0',
            difficulty: '',
            notes: '',
            completed: '',
            date: ''
        };
    }
    componentWillMount() {
        this.setState({
            id: this.props.trail.id,
            name: this.props.trail.name,
            location: this.props.trail.location,
            length: this.props.trail.length,
            difficulty: this.props.trail.difficulty,
            notes: this.props.trail.notes,
            completed: this.props.trail.completed,
            date: this.props.trail.date
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
                <Modal isOpen={true}>
                    <ModalHeader>Edit Trail</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <br />
                                <Input id="name" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="location">Location</Label>
                                <br />
                                <Input id="location" type="text" name="location" value={this.state.location} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="length">Distance</Label>
                                <br />
                                <Input id="length" type="number" min="0" name="length" value={this.state.length} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="difficulty">Difficulty</Label>
                                <br />
                                <Input type="select" name="difficulty" id="difficulty" value={this.state.difficulty} onChange={this.handleChange}>
                                    <option value=""></option>
                                    <option value="Easy">Easy</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Most Advanced">Most Advanced</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="completed">Completed</Label>
                                <br />
                                <Input type="select" name="completed" id="completed" value={this.state.completed} onChange={this.handleChange}>
                                    <option value=""></option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="date">Date</Label>
                                <br />
                                <Input id="date" type="date" min="1900-01-01" name="date" value={this.state.date} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="notes">Notes</Label>
                                <br />
                                <textarea rows="3" cols="30" id="notes" type="text" name="notes" value={this.state.notes} onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}