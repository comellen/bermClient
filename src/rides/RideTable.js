import React from 'react';
import { Table, Button } from 'reactstrap';

const RideTable = (props) => {
    return (
        <div>
            <h3>Rides</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
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
                                <th scope="row">{ride.id}</th>
                                <td>{ride.trail}</td>
                                <td>{ride.location}</td>
                                <td>{ride.bike}</td>
                                <td>{ride.time}</td>
                                <td>{ride.notes}</td>
                                <td>{ride.date}</td>
                                <td>
                                    <Button id={ride.id} onClick={props.delete} color="danger">Delete</Button>
                                    <Button id={ride.id} onClick={e => props.update(e, ride)} color="warning">Update</Button>
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