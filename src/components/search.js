import React, { Component } from 'react'

/*export default ({onKeyUp}) => (
  <div className="input-group mb-3 searchBox">
    <input type="text" 
    className="form-control" 
    placeholder="search news..." 
    aria-label="search news..."
    onKeyUp={(ev)=> onKeyUp(ev)} ref="searchInput"/>
  </div>
)*/

class Search extends Component{
  constructor(props){
    super(props)
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(){
    var searchValue = this.refs.searchbox.value;
    console.log('search value', searchValue)
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