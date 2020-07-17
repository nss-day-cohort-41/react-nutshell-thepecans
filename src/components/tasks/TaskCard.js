import React from "react";
import { Link } from "react-router-dom";


//             "userId": 1,
//             "title": "Change oil in car",
//             "expectCompleteBy": "1594929662",
//             "complete": true,
//             "id": 1

const TaskCard = (props) => {
    return (
        
        <div className="card">
            <div className="card-content">
                {/* <h3>
                    Name: <span className="card-petname">{props.task.title}</span>
                </h3> */}
                {console.log(props.task.complete)}
                <ul>
                    <li>{props.task.title}</li>
                    <li>{props.task.expectCompleteBy}</li>
                    <li>{props.task.complete ? 'done' : 'not done'}</li>
                </ul>
                {/* <button type="button" onClick={() => props.deleteTask(props.animal.id)}>Discharge</button>
                <button type="button"
                    onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
                    Edit
                </button> */}
            </div>
        </div>
    );
};

export default TaskCard;