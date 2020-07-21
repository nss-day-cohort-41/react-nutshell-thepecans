//this module was created by Brendan Abernethy
import React, { useState, useEffect } from 'react';
import CompletedTaskCard from './completedTaskCard';
import ApiManager from '../../modules/ApiManager';
import "./Tasks.css"


const activeUserId = sessionStorage.getItem("credentials")
console.log("hello! from CompletedtaskList", activeUserId)

const CompletedTaskList = (props) => {
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
    const editTask = editedTask => {
        ApiManager.editObject("tasks", editedTask)
            .then(() => getTasks());
            console.log("editing", editedTask)
    };
    
    useEffect(() => {
            getTasks();    
    }, []);

  
    return (
        <>
            <div className="task--list">
                <button type="button"
                    className="section--button"
                    onClick={() => { props.history.push("/tasks/new") }}>
                    Add Task
                </button>
                <button type="button"
                    className="section--button"
                    onClick={() => { props.history.push("/tasks") }}>
                    view incomplete tasks
                </button>
                {tasks.map(task => task.complete && <CompletedTaskCard key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} activeUserId={activeUserId} {...props} />)}
            </div>
        </>
    );
};
export default CompletedTaskList