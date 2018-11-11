import React from 'react';
import BikeIndex from '../bikes/BikeIndex';
import RideIndex from '../rides/RideIndex';
import TrailIndex from '../trails/TrailIndex';

const Home = (props) => {
    return (
        <div>
            <BikeIndex token={props.sessionToken} updateBikesArray={props.fetchBikes} />
            <RideIndex token={props.sessionToken} updateRidesArray={props.fetchRides} />
            <TrailIndex token={props.sessionToken} updateTrailsArray={props.fetchTrails} />
        </div>
    );
}

export default Home;