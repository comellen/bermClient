import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';
import BikeIndex from '../bikes/BikeIndex';
import RideIndex from '../rides/RideIndex';
import TrailIndex from '../trails/TrailIndex';
import bikesImg from '../assets/bikesalt.png';
import trailsImg from '../assets/trailsalt.png';
import ridesImg from '../assets/ridesalt.png';
import './Home.css';

const Home = (props) => {
    return (
        <div>
            <div className="cardContainer">
                <div className="cards">
                    <Card>
                        <Link to="/rides">
                            <CardImg className="cardImg" top src={ridesImg} />
                        </Link>
                        <CardBody>
                            <CardTitle>Rides</CardTitle>
                            <hr />
                            <CardSubtitle>Log a new ride or update a track time.</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="cards">
                    <Card>
                        <Link to="/trails">
                            <CardImg className="cardImg" top src={trailsImg} />
                        </Link>
                        <CardBody>
                            <CardTitle>Trails</CardTitle>
                            <hr />
                            <CardSubtitle>Keep track of trails, ridden and wanted.</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="cards">
                    <Card>
                        <Link to="/bikes">
                            <CardImg className="cardImg" top src={bikesImg} />
                        </Link>
                        <CardBody>
                            <CardTitle>Bikes</CardTitle>
                            <hr />
                            <CardSubtitle>Keep track of your bikes and components.</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;