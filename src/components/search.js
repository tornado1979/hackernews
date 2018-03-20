import React, { Component } from 'react'

class Search extends Component{
  constructor(props){
    super(props)
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(){
    var searchValue = this.refs.searchbox.value;
    this.props.onKeyUp(searchValue)
  }

  render(){
    return(
      <div className="input-group mb-3 searchBox">
        <input type="text" 
        className="form-control" 
        placeholder="search news..." 
        aria-label="search news..."
        onKeyUp={this.updateSearch} ref='searchbox'/>
      </div>     
    )
  }
}

export default Search