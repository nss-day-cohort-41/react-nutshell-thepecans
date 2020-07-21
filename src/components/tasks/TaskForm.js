//this module was created by Brendan Abernethy
import React, { useState } from 'react';
import ApiManager from '../../modules/ApiManager';


const activeUserId = sessionStorage.getItem("credentials")

const activeUserIdInt = parseInt(activeUserId)

const TaskForm = props => {
    const [task, setTask] = useState({ userId: activeUserIdInt, title: "", expectCompleteBy: 0, complete: false });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };


    const constructNewTask = evt => {
        evt.preventDefault();
        if (task.title === "" || task.expectCompleteBy === 0) {
            window.alert("Please input an task title and expectCompleteBy");
        } else {
            setIsLoading(true);
            // Create the task and redirect user to task list
            task.expectCompleteBy = new Date(`${task.expectCompleteBy}T00:00:00`).getTime() / 1000
            ApiManager.addObject("tasks", task)
                .then(() => props.history.push("/tasks"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div classtitle="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            placeholder="Task title"
                        />
                        <label htmlFor="title">title</label>
                        <input
                            type="date"
                            required
                            onChange={handleFieldChange}
                            id="expectCompleteBy"
                            placeholder="Expected completion date"
                        />
                        <label htmlFor="expectCompleteBy">Expected completion date</label>
                    </div>
                    <div classtitle="alignRight">
                        <button
                            type="button"
                            className="section--button"
                            disabled={isLoading}
                            onClick={constructNewTask}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default TaskForm