import React from 'react';
import { Table, Button } from 'reactstrap';

const TrailTable = (props) => {
    return (
        <div>
            <h3>Trails</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
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
                    {console.log(props.trails)}
                    {props.trails.map((trail, id) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{trail.id}</th>
                                <td>{trail.name}</td>
                                <td>{trail.location}</td>
                                <td>{trail.length}</td>
                                <td>{trail.difficulty}</td>
                                <td>{trail.notes}</td>
                                <td>{trail.completed}</td>
                                <td>{trail.date}</td>
                                <td>
                                    <Button id={trail.id} onClick={props.delete} color="danger">Delete</Button>
                                    <Button id={trail.id} onClick={e => props.update(e, trail)} color="warning">Update</Button>
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