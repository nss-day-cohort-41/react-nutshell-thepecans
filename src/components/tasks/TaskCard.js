//this module was created by Brendan Abernethy
import React from "react";
//import { Link } from "react-router-dom";



const TaskCard = (props) => {

    const date = new Date(props.task.expectCompleteBy * 1000)
    console.log(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)
    const taskDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    const completedTask = {
        userId: props.task.userId,
        title: props.task.title,
        expectCompleteBy: props.task.expectCompleteBy,
        complete: true,
        id: props.task.id
    };




    return (

        <div className="card">
            <div className="card-content">

                <h2>{props.task.title}</h2>
                <p>Needs to be completed by: {taskDate}</p>
                <p>status: {props.task.complete ? 'complete' : 'incomplete'}</p>
                <input
                    type="checkbox"
                    name="complete"
                    onChange={() => props.editTask(completedTask)}>
                        
                </input>
                <label htmlFor="complete"> Check the box to mark as complete</label>
                <button
                    type="button"
                    onClick={() => props.deleteTask(props.task.id)}>
                        Remove task
                </button>

            </div>
        </div>
    );
};

export default TaskCard;