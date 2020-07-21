//this module was created by Brendan Abernethy
import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager"

const Login = props => {
    const [newUser, setNewUser] = useState({ username: "", email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    
    let rePassword = ""
    const setRePassword = (event) => {
        rePassword = event.target.value
        console.log("repassword", rePassword)
        return rePassword
    }
    

    // Update state whenever an input field is edited
    const handleFieldChange = (evt) => {
        const stateToChange = { ...newUser };
        stateToChange[evt.target.id] = evt.target.value;
        setNewUser(stateToChange);
    };
    const constructNewUser = evt => {
        evt.preventDefault();
        if (newUser.username === "" || newUser.email === "" || newUser.password === "") {
            window.alert("Please fill out all fields");
        } else {
            setIsLoading(true);
            
            let badWolf = false
            ApiManager.getAll("users").then((users) => {

                users.map((user) => {
                    console.log("login db response", user.username, user.password)
                    console.log("login credentials", newUser.username, newUser.email)
                    if (user.username === newUser.username || user.email === newUser.email) {
                        console.log("oh no!")
                        window.alert("Username or email is unavailable");
                        console.log("newuser.username:", newUser.username, "user.username:", user.username)
                        badWolf = true
                        console.log("badWolf", badWolf)
                        return badWolf

                    } else if (user.username !== newUser.username || user.email !== newUser.email) {
                        console.log("yay, it's available!")
                    }

                })
                if (badWolf === false && newUser.password === rePassword) {
                    ApiManager.addObject("users", newUser)
                        .then(() => console.log("added user"));
                } else {
                    console.log("this shouldn't post to db")
                }

            })

            //props.history.push("/")

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
                    <label htmlFor="username">Username</label>
                    <input onChange={handleFieldChange} type="email"
                        id="email"
                        placeholder="email"
                        required="" autoFocus="" />
                    <label htmlFor="email">Email</label>

                    <input onChange={handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <label htmlFor="password">Password</label>
                    <input onChange={setRePassword} type="password"
                        id="rePassword"
                        placeholder="Re-enter Password"
                        required="" />
                    <label htmlFor="rePassword">Let's type that password in one more time</label>
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