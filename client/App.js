import React from 'react'
import { Switch, Route, NavLink, Link } from 'react-router-dom';

function App(props) {


  return (
    <>
      <header>
        <Link to="/"><h1>YourFitnessPal</h1></Link>

      </header>
      <Switch>
        <Route path="/user/:username">

        </Route>
        <Route path="/search"></Route>

        <Route exact path='/'>

        </Route>
        <Route path='*'>

        </Route>
      </Switch>
    </>
  )

}

export default App;