// import React, { useState, useEffect } from 'react';
// //import the components we will need
// import TaskCard from './TaskCard';
// import ApiManager from '../../modules/ApiManager';

// const TaskList = (props) => {
//   // The initial state is an empty array
//   const [tasks, setTasks] = useState([]);

//   const getTasks = () => {
//     // After the data comes back from the API, we
//     //  use the setAnimals function to update state
//     return ApiManager.getAll("tasks").then(tasksFromAPI => {
//         setTasks(tasksFromAPI)
//     });
//   };
//   const deleteTask = id => {
//     ApiManager.deleteObject("tasks", id)
//       .then(() => ApiManager.getAll("tasks").then(setTasks));
//   };

//   // got the animals from the API on the component's first render
//   useEffect(() => {
//     getTasks();
//   }, []);

//   // Finally we use map() to "loop over" the animals array to show a list of animal cards
//   return (
//     <>
//       <div className="container-cards">
//         {tasks.map(task => <TaskCard  key={task.id} task={task} deleteTask={deleteTask} {...props} />)}
//       </div>
//       <section className="section-content">
//         {/* <button type="button"
//           className="btn"
//           onClick={() => { props.history.push("/tasks/new") }}>
//           Add Task
//           </button> */}
//       </section>
//     </>
//   );
// };
// export default TaskList