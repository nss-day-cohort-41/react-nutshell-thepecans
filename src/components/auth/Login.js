//this module was created by Brendan Abernethy
import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager"

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", email: "", password: "", id: 0 });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {

    e.preventDefault();

    // sessionStorage.setItem(
    //   "credentials",
    //   JSON.stringify(credentials)
    // );

    ApiManager.getAll("users").then((users) => {
      let badLogin
      users.map((user) => {
        if (badLogin === false) {
          return console.log("yay, we have a user")
        }
        console.log("login db response", user.username, user.password)
        console.log("login credentials", credentials.username, credentials.password)
        badLogin ? console.log("badlogin is", badLogin) : console.log("badlogin is", badLogin)
        if (user.username === credentials.username && user.password === credentials.password) {
          badLogin = false
          console.log("yay! badlogin is", badLogin)
          props.setUser(user)
          props.history.push("/");
          console.log("userId", user.id)
          console.log("7?")
        } else {
          badLogin = true
          sessionStorage.clear()
          console.log("boo. badLogin is:", badLogin)
        }
        

      })
      

    })



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
        <button type="button" onClick={() => props.history.push(`/registrationform`)}>Create New User</button>
      </fieldset>
    </form>
  );
};

export default Login;