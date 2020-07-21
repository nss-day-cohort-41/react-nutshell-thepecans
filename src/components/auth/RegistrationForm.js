//this module was created by Brendan Abernethy
import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager"

const Login = props => {
    const [newUser, setNewUser] = useState({ username: "", email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);

    // Update state whenever an input field is edited
    const handleFieldChange = (evt) => {
        const stateToChange = { ...newUser };
        stateToChange[evt.target.id] = evt.target.value;
        setNewUser(stateToChange);
    };
    const constructNewUser = evt => {
        evt.preventDefault();
        if (newUser.username === "" || newUser.email === "" || newUser.password === "") {
            window.alert("Please input an task title and expectCompleteBy");
        } else {
            setIsLoading(true);
            // Create the task and redirect user to task list
            //current problem in case I have to stop working for the evening.  this is creating a user on each iteration of the map...it will creat as many new users as there are current users...
            let badWolf = false
            ApiManager.getAll("users").then((users) => {
                
                users.map((user) => {
                    console.log("login db response", user.username, user.password)
                    console.log("login credentials", newUser.username, newUser.email)
                    if (user.username === newUser.username || user.email === newUser.email) {
                        console.log("oh no!")
                        window.alert("Username or email is unavailable");
                    badWolf = true
                    console.log("badWolf", badWolf)
                        return badWolf

                    } else if (user.username !== newUser.username || user.email !== newUser.email) {
                        console.log("yay, it's available!")
                    }

                })


            })
            if (badWolf === true) {
                ApiManager.addObject("users", newUser)
                    .then(() => props.history.push("/"));
            } else {
                console.log("this shouldn't post to db")
            }


        }
    };

    // else if (newUser.password !== newUser.rePassword) {
    //     window.alert("hmmm... Something isn't right with your passwords.. Let's try entering them again");
    //}

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
                <h2>New?</h2>
                <h3>Sign up Below:</h3>
                <div className="formgrid">
                    <input
                        onChange={handleFieldChange}
                        type="username"
                        id="username"
                        placeholder="username"
                        required />
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
                    {/* <input onChange={handleFieldChange} type="rePassword"
                        id="rePassword"
                        placeholder="Re-enter Password"
                        required="" />
                    <label htmlFor="inputRePassword">Not that I don't trust you, but let's type that in again</label> */}
                </div>
                {/* <button type="submit">Register</button> */}
                <button
                    type="submit"
                    disabled={isLoading}
                    onClick={constructNewUser}

                >Register
                </button>
                {console.log("newUser:", newUser)}
            </fieldset>
        </form>
    );
};

export default Login;