import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Bikes.css';
import APIURL from '../helpers/environment';

export default class BikeCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            model: '',
            year: '',
            frame: '',
            suspension: '',
            fork: '',
            shock: '',
            wheelSize: '',
            shifters: '',
            derailleur: '',
            cassette: '',
            brakes: '',
            tires: '',
            additionalComponents: '',
            plannedUpgrades: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/bikes/create`, {
            method: 'POST',
            body: JSON.stringify({ bike: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((res) => (console.log(res)))
            .then((newBike) => {
                this.setState({
                    brand: '',
                    model: '',
                    year: '',
                    frame: '',
                    suspension: '',
                    fork: '',
                    shock: '',
                    wheelSize: '',
                    shifters: '',
                    derailleur: '',
                    cassette: '',
                    brakes: '',
                    tires: '',
                    additionalComponents: '',
                    plannedUpgrades: ''
                });
            })
            .then(e => this.props.fetchBikes());
        }

    render() {
        return (
            <div>
                <Form className="addForm" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="brand">Brand</Label>
                        <br />
                        <Input id="brand" type="text" name="brand" value={this.state.brand} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="model">Model</Label>
                        <br />
                        <Input id="model" type="text" name="model" value={this.state.model} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="year">Year</Label>
                        <br />
                        <Input id="year" type="text" name="year" value={this.state.year} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="frame">Frame</Label>
                        <br />
                        <Input id="frame" type="text" name="frame" value={this.state.frame} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="suspension">Suspension</Label>
                        <br />
                        <Input type="select" name="suspension" id="suspension" value={this.state.suspension} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="Full suspension">Full suspension</option>
                            <option value="Hardtail">Hardtail</option>
                            <option value="None">None</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="fork">Fork</Label>
                        <br />
                        <Input id="fork" type="text" name="fork" value={this.state.fork} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="shock">Shock</Label>
                        <br />
                        <Input id="shock" type="text" name="shock" value={this.state.shock} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="wheelSize">Wheel Size</Label>
                        <br />
                        <Input type="select" name="wheelSize" id="wheelSize" value={this.state.wheelSize} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="24">24</option>
                            <option value="26">26</option>
                            <option value="27.5">27.5</option>
                            <option value="29">29</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="shifters">Shifters</Label>
                        <br />
                        <Input id="shifters" type="text" name="shifters" value={this.state.Shifters} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="derailleur">Derailleur</Label>
                        <br />
                        <Input id="derailleur" type="text" name="derailleur" value={this.state.derailleur} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cassette">Cassette</Label>
                        <br />
                        <Input id="cassette" type="text" name="cassette" value={this.state.cassette} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="brakes">Brakes</Label>
                        <br />
                        <Input id="brakes" type="text" name="brakes" value={this.state.brakes} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tires">Tires</Label>
                        <br />
                        <Input id="tires" type="text" name="tires" value={this.state.tires} placeholder="" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="additionalComponents">Additional Components</Label>
                        <br />
                        <textarea rows="3" cols="30" id="additionalComponents" type="text" name="additionalComponents" value={this.state.additionalComponents} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="plannedUpgrades">Planned Upgrades</Label>
                        <br />
                        <textarea rows="3" cols="30" id="plannedUpgrades" type="text" name="plannedUpgrades" value={this.state.plannedUpgrades} onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary" onClick={e => {this.props.fetchBikes(); this.props.toggle()}}>Submit</Button>
                </Form>
            </div>
        );
    }
}