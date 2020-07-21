//this module was created by Brendan Abernethy
import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager"

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", email: "", password: "", id: 0});

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {

    e.preventDefault();
    
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(credentials)
    );
    //props.setUser(credentials)

    ApiManager.getAll("users").then((users) => {
        users.map((user) => {
            console.log("login db response", user.username, user.password)
            console.log("login credentials", credentials.username, credentials.password)
            if (user.username === credentials.username && user.password === credentials.password) {
                console.log("yay")
                  props.setUser(user.id)
            } else {
                console.log("boo")
            }

        })
        
        
    })


    props.history.push("/");
  }

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h1>Welcome to Nutshell</h1>
        <h3>Please sign in to continue</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="username"
            required="" autoFocus="" />
          <label htmlFor="inputUsername">Username</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;