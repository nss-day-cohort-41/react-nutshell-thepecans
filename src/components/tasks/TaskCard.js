import React, { useEffect } from "react";
//import { Link } from "react-router-dom";



//             "userId": 1,
//             "title": "Change oil in car",
//             "expectCompleteBy": "1594929662",
//             "complete": true,
//             "id": 1


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
                {/* <h3>
                    Name: <span className="card-petname">{props.task.title}</span>
                </h3> */}

                <h2>{props.task.title}</h2>
                <p>Needs to be completed by: {taskDate}</p>
                <p>status: {props.task.complete ? 'complete' : 'incomplete'}</p>
                {/* <TaskCheckbox {...props}/> */}
                <button
                    type="button"
                    //className="btn btn-primary"
                    onClick={() => props.editTask(completedTask)}>
                        Mark as complete
                </button>
                <button
                    type="button"
                    //className="btn btn-primary"
                    onClick={() => props.deleteTask(props.task.id)}>
                        Remove task
                </button>

            </div>
        </div>
    );
};
//<button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
//<button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>

export default TaskCard;