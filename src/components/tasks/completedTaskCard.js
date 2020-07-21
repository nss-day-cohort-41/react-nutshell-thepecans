//this module was created by Brendan Abernethy
import React from "react";


const CompletedTaskCard = (props) => {

    const date = new Date(props.task.expectCompleteBy * 1000)
    console.log(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)
    const taskDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    const uncompletedTask = {
        userId: props.task.userId,
        title: props.task.title,
        expectCompleteBy: props.task.expectCompleteBy,
        complete: false,
        id: props.task.id
    };




    return (

        <div className="card">
            <div className="task--card">
                <h2>{props.task.title}</h2>
                <p>Needs to be completed by: {taskDate}</p>
                <p>status: {props.task.complete ? 'complete' : 'incomplete'}</p>
                <input
                    type="checkbox"
                    name="incomplete"
                    checked
                    onChange={() => props.editTask(uncompletedTask)}>
                        
                </input>
                <label htmlFor="incomplete"> Uncheck the box to mark as incomplete</label>
                <button
                    type="button"
                    className="card--button"
                    onClick={() => props.deleteTask(props.task.id)}>
                        Remove task
                </button>

            </div>
        </div>
    );
};


export default CompletedTaskCard;