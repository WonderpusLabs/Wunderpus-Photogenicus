import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SignupComponent = (props) => {
  //track error or success of sign up
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  //function to handle the submit on a sign up
  const handleSignUp = (e) => {
    //prevent normal submit functionality
    e.preventDefault();
    //save username and password fields to variables
    const username = document.getElementById('signup-user').value;
    const password = document.getElementById('signup-password').value;
    //create the body of our post request
    const body = {
      username,
      password
    }
    //make a post request to sign up
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      //turn the body into JSON
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        //if it works, set success to true
        setSuccess(true);
        //send user to a different page [NOTE: where should they go? Should they have to login after signing up or be auto-logged-in?]
        props.history.push('/');
      })
      //if there's an error we'll render an error message below
      .catch(err => setError(err))
  }

  return (
    <div className="signupform">
      <h3>Sign Up for an Account</h3>
      <form id="signup">
        <label htmlFor="signup-user">Username: </label>
        <input type="text" id="signup-user" />
        <label htmlFor="signup-password">Password: </label>
        <input type="password" id="signup-password" />

        <input type="submit" value="Sign Up" className="btn" id="signup-submit" onSubmit={handleSignUp} />
        {error}
      </form>

    </div>
  )

}

export default withRouter(SignupComponent);