import React, { Component } from 'react'
import SearchBarComponent from '../component/SearchBarComponent.jsx';
import SearchResultComponent from '../component/SearchResultComponent.jsx';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      areResultsFetched: false
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const search = document.getElementById('searchbar').value;
    fetch('/api', {
      method: 'GET',
      body: JSON.stringify(search)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data, areResultsFetched: true })
      })
  }

  render() {
    // if (this.state.areResultsFetched) {
    //   const searchItems = this.state.results.map((result) => {
    //     <SearchResultComponent />
    //   })
    // }

    return (
      <>
        <div className='search'>
          <SearchBarComponent handleSearchSubmit={this.handleSearchSubmit} />
          {/* {this.state.areResultsFetched && { searchItems }} */}


          <div>
            <SearchResultComponent />
          </div>
        </div>
      </>
    )
  }


}

export default SearchContainer;