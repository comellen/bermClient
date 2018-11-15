import React from 'react';
import { Table, Button } from 'reactstrap';
import rideicon from '../assets/rideicon.png';

const RideTable = (props) => {
    return (
        <div className="rideTable">
            <h3>Rides</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Trail</th>
                        <th>Location</th>
                        <th>Bike</th>
                        <th>Time</th>
                        <th>Notes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(props.rides)}
                    {props.rides.map((ride, id) => {
                        return (
                            <tr key={id}>
                            <img className="rideIcon" src={rideicon} alt="ride icon" />
                                <th scope="row">{ride.id}</th>
                                <td>{ride.trail}</td>
                                <td>{ride.location}</td>
                                <td>{ride.bike}</td>
                                <td>{ride.time}</td>
                                <td>{ride.notes}</td>
                                <td>{ride.date}</td>
                                <td>
                                    <Button className="tableButtons" id={ride.id} onClick={e => {props.setUpdatedRide(e, ride); props.toggleUpdate()}} color="info">Update</Button>

                                    <Button className="tableButtons" id={ride.id} onClick={e => props.delete(e, ride)} color="danger">Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default RideTable;