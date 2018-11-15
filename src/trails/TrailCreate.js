import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Trails.css'
import APIURL from '../helpers/environment';

export default class TrailCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            length: '0',
            difficulty: '',
            notes: '',
            completed: '',
            date: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/trails/create`, {
            method: 'POST',
            body: JSON.stringify({ trail: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => res.json())
            .then((newTrail) => {
                this.setState({
                name: '',
                location: '',
                length: '0',
                difficulty: '',
                notes: '',
                completed: '',
                date: ''
                });
            });
            this.props.fetchTrails();
            this.refresh();
        }
    
        refresh = () => {
            this.props.fetchTrails();
        }

    render() {
        return (
            <div>
                <Form className="addForm" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Trail Name</Label>
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
                    <Button type="submit" color="primary" onClick={e => {this.props.fetchTrails(); this.props.toggle()}}>Submit</Button>
                </Form>
            </div >
        );
    }
}