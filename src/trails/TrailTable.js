import React from 'react';
import { Table, Button } from 'reactstrap';
import trailicon from '../assets/trailicon.png';

const TrailTable = (props) => {
    return (
        <div className="trailTable">
            <h3>Trails</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Length</th>
                        <th>Difficulty</th>
                        <th>Notes</th>
                        <th>Completed?</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.trails.map((trail, id) => {
                        return (
                            <tr key={id}>
                            <img className="trailIcon" src={trailicon} alt="trail icon" />
                                <th scope="row">{trail.id}</th>
                                <td>{trail.name}</td>
                                <td>{trail.location}</td>
                                <td>{trail.length}</td>
                                <td>{trail.difficulty}</td>
                                <td>{trail.notes}</td>
                                <td>{trail.completed}</td>
                                <td>{trail.date}</td>
                                <td>
                                    <Button className="tableButtons" id={trail.id} onClick={e => {props.setUpdatedTrail(e, trail); props.toggleUpdate()}} color="info">Update</Button>

                                    <Button className="tableButtons" id={trail.id} onClick={e => props.delete(e, trail)} color="danger">Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default TrailTable;