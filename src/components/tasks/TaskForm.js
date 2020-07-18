import React, { useState } from 'react';
import ApiManager from '../../modules/ApiManager';
//             "userId": 1,
//             "title": "Change oil in car",
//             "expectCompleteBy": "1594929662",
//             "complete": true,
//             "id": 1
const activeUserId = sessionStorage.getItem("credentials")

const TaskForm = props => {
    const [task, setTask] = useState({userId: activeUserId, title: "", expectCompleteBy: 0, complete: false});
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
                            type="text"
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