import React, { Component } from 'react'

class Search extends Component{
  constructor(props){
    super(props)
    this.updateSearch = this.updateSearch.bind(this)
    this.clearSearchString = this.clearSearchString.bind(this)
  }

  updateSearch(){
    var searchValue = this.refs.searchbox.value;
    this.props.searchArticles(searchValue)
  }

  clearSearchString(){
    let inputSearch = document.getElementById('inputSearch')
    inputSearch.value=''
    this.props.clearSearchString()
  }

  render(){
    const hasText = document.getElementById('inputSearch') 
    && document.getElementById('inputSearch').value.length > 0
    console.log('hasText:', hasText)
    return(
      <div className="input-group mb-3 searchBox">
        <input type="text" id="inputSearch"
        className="form-control" 
        placeholder="search news..." 
        aria-label="search news..."
        onKeyUp={this.updateSearch} ref='searchbox'/>
        {hasText 
          && <span className="deleteText" onClick={this.clearSearchString}>x</span>}
      </div>     
    )
  }
}

export default Search