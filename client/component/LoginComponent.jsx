import React from "react";
// import '../stylesheets/styles.css'
import { useState } from "react";
import { Link } from 'react-router-dom'

const LoginComponent = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   title is the initial state. setTitle is the function that changes state

  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        Accept: "application/JSON",
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log("Login fetch /api ERROR: ", err));
  };


  return (
    <form className="loginContainer" onSubmit={onSubmitHandler}>
      <div className="userName">Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        {/* using an anonymous function that accepts an argument, 'e', and calling setUsername and passing that event in as its argument. */}
      </div>
      <div className="userName">Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div> Don't have an account? sign up <Link to="/signup">here</Link>
      </div>
      <div className="loginDiv">
        <button type="button" className="submitBtnLogin" onClick={onSubmitHandler}>
          Submit
        </button>
      </div>

    </form>
  )
}

export default LoginComponent