import React from 'react'
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import LoginComponent from './component/LoginComponent.jsx';
import SignupComponent from './component/SignupComponent.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import SearchContainer from './containers/SearchContainer.jsx';
import SearchResultComponent from './component/SearchResultComponent.jsx';

function App(props) {


  return (
    <>
      <div className="containerApp">
        <header className="headerApp">
          <Link to="/"><h1>YourFitnessPal</h1></Link>



        </header>
      </div>
      <Switch>
        <Route exact path='/signup'>
          <SignupComponent />
        </Route>
        <Route path="/user/:username">

        </Route>
        <Route path="/result">
          <SearchResultComponent />
        </Route>

        <Route exact path="/search">
          <SearchContainer />
        </Route>
        <Route exact path='/'>
          <LoginContainer />
        </Route>
        <Route path='*'>

        </Route>
      </Switch>
    </>
  )

}

export default App;