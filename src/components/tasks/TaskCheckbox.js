// import React, { useState, useEffect } from "react"
// import ApiManager from "../../modules/ApiManager"


// const activeUserId = sessionStorage.getItem("credentials")

// const activeUserIdInt = parseInt(activeUserId)

// const TaskCheckbox = (props) => {
//     const [task, setTask] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleFieldChange = evt => {
//         const stateToChange = { ...task };
//         stateToChange[evt.target.id] = evt.target.value;
//         setTask(stateToChange);
//     };

//     const updateExistingTask = evt => {
//         evt.preventDefault()
//         setIsLoading(true);

//         // "userId": 2,
//         //   "title": "test",
//         //   "expectCompleteBy": 1595221200,
//         //   "complete": false,
//         //   "id": 5
//         // This is an edit, so we need the id
//         const editedTask = {
//             userId: activeUserIdInt,
//             title: task.title,
//             expectCompleteBy: task.expectCompleteBy,
//             complete: true,
//             id: props.match.params.taskId
//             //props.match.params.taskId
//         };
//         //console.log("hello!!! checkbox here!!")

//         ApiManager.editObject("tasks", editedTask)
//             .then(() => props.history.push("/tasks"))
//     }
//     console.log(props.match.params.taskId)

//     useEffect(() => {
//         ApiManager.getExpanded("tasks", props.match.params.taskId)
//             .then(task => {
//                 setTask(task);
//                 setIsLoading(false);
//             });
//     }, [props.match.params.taskId]);

//     return (
//         <>
//             <form>
//                 <fieldset>
//                     <div className="formgrid">
//                         {/* <input
//                             type="checkbox"
//                             required
//                             className="completed"
//                             onChange={handleFieldChange}
//                             id="completed"
//                             value={task.complete}
//                             onClick={updateExistingTask}
//                             disabled={isLoading}
//                         /> */}
//                         {/* <button
//                             type="button" disabled={isLoading}
//                             onClick={updateExistingAnimal}
//                             className="btn btn-primary"
//                         >Submit</button>
//                         <label htmlFor="completed">Check box to mark as complete</label>
//                         {console.log("hello!!! checkbox here!!", props.task)} */}

//                         <button
//               type="button" disabled={isLoading}
//               onChange={handleFieldChange}
//               onClick={updateExistingTask}
//               className="btn btn-primary"
//             >Submit</button>
//                     </div>
//                 </fieldset>
//             </form>
//         </>
//     );
// }

// export default TaskCheckbox