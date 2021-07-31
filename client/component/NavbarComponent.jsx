import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {



  return (
    <header className="headerApp">
      <Link to="/"><h1>YourFitnessPal</h1></Link>
      <ul>
        <Link to='/search'>Search</Link>
        <Link >Add Meal</Link>
        <Link>My Profile</Link>

      </ul>


    </header>
  )

}

export default NavbarComponent;