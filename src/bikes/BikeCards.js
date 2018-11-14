import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const BikeCards = (props) => {
    return (
        <div className="cardContainer">
            {props.bikes.map((bike, id) => {
                return (
                    <Card className="bikeCard">
                        <CardImg src="/" />
                        <CardBody>
                            <CardTitle className="cardTitle">{bike.year} {bike.brand} {bike.model}</CardTitle>
                            <ul>
                                <li>Frame: {bike.frame}</li>
                                <li>Suspension: {bike.suspension}</li>
                                <li>Fork: {bike.fork}</li>
                                <li>Shock: {bike.shock}</li>
                                <li>Wheel Size: {bike.wheelSize}</li>
                                <li>Shifters: {bike.shifters}</li>
                                <li>Derailleur: {bike.derailleur}</li>
                                <li>Cassette: {bike.cassette}</li>
                                <li>Brakes: {bike.brakes}</li>
                                <li>Tires: {bike.tires}</li>
                                <li>Additional Components: {bike.additionalComponents}</li>
                                <li>Planned Upgrades: {bike.plannedUpgrades}</li>
                            </ul>
                            <div className="cardButtons">
                            <Button className="cardUpdate" id={bike.id} onClick={e => props.update(e, bike)} color="info">Update</Button>

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