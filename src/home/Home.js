import React from 'react';
import BikeIndex from '../bikes/BikeIndex';
import RideIndex from '../rides/RideIndex';

const Home = (props) => {
    return (
        <div>
            <BikeIndex token={props.sessionToken} updateBikesArray={props.fetchBikes} />
            <RideIndex token={props.sessionToken} updateRidesArray={props.fetchRides} />
        </div>
    );
}

export default Home;