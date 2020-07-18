import React, { useEffect } from "react";
import { Link } from "react-router-dom";


//             "userId": 1,
//             "title": "Change oil in car",
//             "expectCompleteBy": "1594929662",
//             "complete": true,
//             "id": 1


const TaskCard = (props) => {
    
    const date = new Date(props.task.expectCompleteBy*1000)
    console.log(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`)
    const taskDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

    


    return (

        <div className="card">
            <div className="card-content">
                {/* <h3>
                    Name: <span className="card-petname">{props.task.title}</span>
                </h3> */}

                <h2>{props.task.title}</h2>
                <p>Needs to be completed by: {taskDate}</p>
                <p>status: {props.task.complete ? 'complete' : 'incomplete'}</p>
                <input type="checkbox" className="completed" id="completed"/>
                <label htmlFor="completed">Check box to mark as complete</label>
                {/* this needs to be aple to update database when checked */}
                
            </div>
        </div>
    );
};

export default TaskCard;