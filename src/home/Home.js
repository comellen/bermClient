import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import BikeIndex from '../bikes/BikeIndex';
import RideIndex from '../rides/RideIndex';
import TrailIndex from '../trails/TrailIndex';
import './Home.css';

const Home = (props) => {
    return (
        <div>
            {/* <BikeIndex token={props.sessionToken} updateBikesArray={props.fetchBikes} />
            <RideIndex token={props.sessionToken} updateRidesArray={props.fetchRides} />
            <TrailIndex token={props.sessionToken} updateTrailsArray={props.fetchTrails} /> */}
            <div className="cardContainer">
                <div className="cards">
                    <Card>
                        <CardImg top width="100%" src="" />
                        <CardBody>
                            <CardTitle>Bikes</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>
                                <br />
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="cards">
                    <Card>
                        <CardImg top width="100%" src="" />
                        <CardBody>
                            <CardTitle>Rides</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>
                                <br />
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="cards">
                    <Card>
                        <CardImg top width="100%" src="" />
                        <CardBody>
                            <CardTitle>Trails</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>
                                <br />
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Home;