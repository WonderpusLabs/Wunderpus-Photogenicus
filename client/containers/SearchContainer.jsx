import React, { Component } from 'react'
import SearchBarComponent from '../component/SearchBarComponent.jsx';
import SearchResultComponent from '../component/SearchResultComponent.jsx';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      areResultsFetched: false
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('searchbar').value;
    console.log('search term: ', searchTerm)
    const body = { searchTerm }
    fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ results: data, areResultsFetched: true })
      })
  }

  render() {


    return (
      <>
        <div className='search'>
          <SearchBarComponent handleSearchSubmit={this.handleSearchSubmit} />
          {this.state.areResultsFetched && <SearchResultComponent info={this.state.results} />}



        </div>
      </>
    )
  }


}

export default SearchContainer;