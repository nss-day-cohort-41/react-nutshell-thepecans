import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import ApiManager from '../../modules/ApiManager';


const activeUserId = sessionStorage.getItem("credentials")
console.log("hello! from taskList", activeUserId)

const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        return ApiManager.getByUserId("tasks", activeUserId).then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    };
    const deleteTask = id => {
        ApiManager.deleteObject("tasks", id)
            .then(() => getTasks());
    };
    //active user Id captured from session storage (pecan.js)


    // got the animals from the API on the component's first render
    useEffect(() => {
            getTasks();    
    }, []);

    // Finally we use map() to "loop over" the animals array to show a list of animal cards
    return (
        <>
            <div className="container-cards">
                <button type="button"
                    className="btn"
                    onClick={() => { props.history.push("/tasks/new") }}>
                    Add Task
                </button>
                {tasks.map(task => <TaskCard key={task.id} task={task} deleteTask={deleteTask} activeUserId={activeUserId} {...props} />)}
            </div>
            <section className="section-content">

            </section>
        </>
    );
};
export default TaskList