import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

import {
  resetSearch,
  updateSearch,
} from './actionCreators'

import {
  getSearchText,
} from './selectors'

class Search extends Component{
  constructor(props){
    super(props)
    this.updateSearch = this.updateSearch.bind(this)
    this.clearSearchString = this.clearSearchString.bind(this)
  }

  updateSearch(){
    const {
      minSearchChars,
    } = this.props

    var searchValue = this.refs.searchbox.value;
    if(searchValue.length > minSearchChars){
      //dispatch action UPDATE_SEARCH
      this.props.updateSearch(searchValue)
      //call action to fetch news
      this.props.searchArticles(searchValue)
    }
  }

  clearSearchString(){
    let inputSearch = document.getElementById('inputSearch')
    inputSearch.value=''
    this.props.resetSearch()
    this.props.clearSearchString()
  }

  render(){
    const {
      searchText,
    } = this.props

    const hasText = searchText.length > 0

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

Search.propTypes = {
  searchArticles: PropTypes.func.isRequired,
  clearSearchString: PropTypes.func.isRequired,
  minSearchChars: PropTypes.number.isRequired,
  resetSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  searchText: getSearchText(state),
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  resetSearch,
  updateSearch,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);