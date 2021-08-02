import React from 'react';

const SearchBarComponent = ({ handleSearchSubmit }) => {



  return (
    <div className='searchbar'>
      <input type='text' placeholder='Find a food' id='searchbar' />
      <input id='search-submit' type='submit' value='Search' onClick={handleSearchSubmit} />
    </div>
  )

}

export default SearchBarComponent;
