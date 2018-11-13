import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class BikeEdit extends Component {
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

        componentWillMount() {
            this.setState({
                id: this.props.bike.id,
                brand: this.props.bike.brand,
                model: this.props.bike.model,
                year: this.props.bike.year,
                frame: this.props.bike.frame,
                suspension: this.props.bike.suspension,
                fork: this.props.bike.fork,
                shock: this.props.bike.shock,
                wheelSize: this.props.bike.wheelSize,
                shifters: this.props.bike.shifters,
                derailleur: this.props.bike.derailleur,
                cassette: this.props.bike.cassette,
                brakes: this.props.bike.brakes,
                tires: this.props.bike.tires,
                additionalComponents: this.props.bike.additionalComponents,
                plannedUpgrades: this.props.bike.plannedUpgrades
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
                        <ModalHeader>Edit Bike</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
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
                                    <Input id="year" type="integer" name="year" value={this.state.year} placeholder="" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="frame">Frame</Label>
                                    <br />
                                    <Input id="frame" type="text" name="frame" value={this.state.frame} placeholder="aluminum" onChange={this.handleChange} />
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
                                <Button type="submit" color="primary">Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }