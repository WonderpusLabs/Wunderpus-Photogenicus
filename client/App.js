import React from 'react'
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import LoginComponent from './component/LoginComponent.jsx';
import SignupComponent from './component/SignupComponent.jsx';

function App(props) {


  return (
    <>
      <header>
        <Link to="/"><h1>YourFitnessPal</h1></Link>

      </header>
      <Switch>
        <Route exact path='/signup'>
          <SignupComponent />
        </Route>
        <Route path="/user/:username">

        </Route>
        <Route path="/search"></Route>

        <Route exact path='/'>
          <LoginComponent />
        </Route>
        <Route path='*'>

        </Route>
      </Switch>
    </>
  )

}

export default App;