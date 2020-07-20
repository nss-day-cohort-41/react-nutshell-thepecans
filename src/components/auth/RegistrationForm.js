//this module was created by Brendan Abernethy
import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager"

const Login = props => {
  const [newUser, setNewUser] = useState({ username: "", email: "", password: ""});
  const [isLoading, setIsLoading] = useState(false);

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...newUser };
    stateToChange[evt.target.id] = evt.target.value;
    setNewUser(stateToChange);
  };
  const constructNewUser = evt => {
    evt.preventDefault();
    if (user.username === "" || user.email === "" || user.password === "") {
        window.alert("Please input an task title and expectCompleteBy");
    } else {
        setIsLoading(true);
        // Create the task and redirect user to task list
        task.expectCompleteBy = new Date(`${task.expectCompleteBy}T00:00:00`).getTime() / 1000
        ApiManager.addObject("tasks", task)
            .then(() => props.history.push("/tasks"));
    }
};

//   const handleLogin = (e) => {

//     e.preventDefault();
    
//     sessionStorage.setItem(
//       "newUser",
//       JSON.stringify(newUser)
//     );
//     //props.setUser(newUser)

//     ApiManager.getAll("users").then((users) => {
//         users.map((user) => {
//             console.log("login db response", user.username, user.password)
//             console.log("login newUser", newUser.username, user.password)
//             if (user.username === newUser.username && user.password === newUser.password) {
//                 console.log("yay")
//                   props.setUser(user.id)
//             } else {
//                 console.log("boo")
//             }

//         })
        
        
//     })


//     //props.history.push("/");
//   }

  return (
    <form onSubmit={handleFieldChange}>
      <fieldset>
        <h1>Welcome to Nutshell</h1>
        <h3>Please sign in to continue</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="username"
            required="" autoFocus="" />
          <label htmlFor="inputUsername">Username</label>
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="email"
            required="" autoFocus="" />
          <label htmlFor="inputEmail">Email</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Register</button>
        {console.log("newUser:", newUser)}
      </fieldset>
    </form>
  );
};

export default Login;