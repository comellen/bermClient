import React from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import bikeicon from '../assets/bikeicon.png';

const BikeCards = (props) => {
    return (
        <div className="cardContainer">
            {props.bikes.map((bike, id) => {
                return (
                    <Card className="bikeCard" key={bike.id}>
                        <div className="bikeIconContainer">
                            <img className="bikeIcon" src={bikeicon} alt="bike icon" />
                        </div>
                        <CardBody>
                            <CardTitle className="cardTitle"> {bike.year} {bike.brand} {bike.model}</CardTitle>
                                <ul className="ul">
                                    <li><b><i>Frame</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b>{bike.frame}</li>
                                    <li><b><i>Suspension</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.suspension}</li>
                                    <li><b><i>Fork</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.fork}</li>
                                    <li><b><i>Shock</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.shock}</li>
                                    <li><b><i>Wheel Size</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.wheelSize}</li>
                                    <li><b><i>Shifters</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.shifters}</li>
                                    <li><b><i>Derailleur</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.derailleur}</li>
                                    <li><b><i>Cassette</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.cassette}</li>
                                    <li><b><i>Brakes</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.brakes}</li>
                                    <li><b><i>Tires</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.tires}</li>
                                    <li><b><i>Additional Components</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.additionalComponents}</li>
                                    <li><b><i>Planned Upgrades</i>&nbsp;&nbsp;-&nbsp;&nbsp;</b> {bike.plannedUpgrades}</li>
                                </ul>
                            <div className="cardButtons">
                                <Button className="cardUpdate" id={bike.id} onClick={e => { props.setUpdatedBike(e, bike); props.toggleUpdate() }} color="info">Update</Button>

                                <Button className="cardDelete" id={bike.id} onClick={e => props.delete(e, bike)} color="danger">Delete</Button>
                            </div>
                        </CardBody>
                    </Card>
                );
            })}
        </div>
    );
}

export default BikeCards;