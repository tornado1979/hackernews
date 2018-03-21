import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

import { 
    fetchNews,
    updateArticlesChunk,
    changeSorting,
 } from './actionCreators'

import { 
    getArticlesByNumber,
    getIsFetching,
    getNumberOfArticles,
 } from './selectors'

 //import sass
import './css/index.scss'
//import components
import CustomButton from '../../components/customButton'
import Loader from '../../components/loader'
import SearchBox from '../../components/search'
import Reload from '../../components/reload'

class Home extends Component {
  constructor(props){
    super(props)
    this.loadMoreArticles = this.loadMoreArticles.bind(this)
    this.searchArticles = this.searchArticles.bind(this)
    this.clearSearchString = this.clearSearchString.bind(this)
    this.reload = this.reload.bind(this)
  }
  //When component mount, it updates the state with the news and with the init
  // number of Articles (10)
  componentDidMount(){
    const initChunk = 10 //default articles chunks 
    this.props.fetchNews() // dispatch action to fetch news
    this.props.updateArticlesChunk(initChunk) // dispatch action to update the articlesChunks
  }

  //Load more articles on the blowser
  loadMoreArticles(currentArticlesDiplayed, ev){
    ev.preventDefault()

    const {
      fetchNews,
      updateArticlesChunk,
    } = this.props

    //dispatch actions to fetch 10 more articles
    fetchNews()
    updateArticlesChunk(currentArticlesDiplayed+10)
  }

  //search articles
  searchArticles(searchString){
    const {
      fetchNews,
    } = this.props

    //search string
    fetchNews(searchString)
  }

  //clear search text and fetch all news
  clearSearchString(){
    const {
      fetchNews
    } = this.props

    fetchNews()
  }

  //reload articles
  reload(){
    this.clearSearchString()
  }

  //Change the articles sort type & order
  changeArticlesSorting(event){
    event.preventDefault()

    //dispatch action to update the sort values on state
    const sortTypeOrder = event.target.value.split(',')

    this.props.changeSorting(sortTypeOrder[0],sortTypeOrder[1])
  }

    render() {

      const {
        articles,
        articlesNumber,
        isFetching,
      } = this.props
        
      const moment = require('moment');
      const showMore = articlesNumber > articles.length
      let vals

        if(articles && articles.length > 0){

          vals = articles.map( (article,idx) => {

          var articleDate = moment(article.created_at).fromNow()
      
          //loop through the articles array and build the elements
          let className = `my-content-1`

          return (
            <div className={className} key={idx} >
              <div className="card" onClick={() => window.location.href=article.url }>
                <div className="card-body">
                  <p className="card-title">{idx+1}. {article.title}</p>
                  <p className="card-date">{article.points} points by {article.author} | comments {article.num_comments} | {articleDate}</p>
                </div>
              </div>
            </div>)
          })
        }
        
        //move to separate component
        const sortOrderDropDown =
          <select className="sortOrderBox" onChange={(event ) => this.changeArticlesSorting(event)}>
            <option value="none,none"></option>
            <option value="date,asc">Date asc</option>
            <option value="date,desc">Date desc</option>
            <option value="title,asc">Title asc</option>
            <option value="title,desc">Title desc</option>
          </select>

        return(
          <div className="my-container">
            {<div className="my-row">
              <div className="col">
                {/* progress bar */}
                {isFetching && <Loader progress={1} />}
                {!isFetching && <div style={{'height': '15px'}}></div>}
              </div>
            </div>}
            <div className="my-row">
              <div className="sortordercol">
                {sortOrderDropDown}
              </div>
              <div className="searchcol">
                <SearchBox
                  searchArticles={this.searchArticles}
                  clearSearchString={this.clearSearchString}
                  minSearchChars={3} />
              </div>
              <div className="reloadcol">
                <Reload 
                reload={this.reload}/>
              </div>
            </div>
            <div className="my-row">
              {vals}
              {showMore && <CustomButton
                articles={articles.length}
                onClick={this.loadMoreArticles}
                />}
            </div>
           </div>

        )
    }
}

Home.propTypes = {
  articles: propTypes.array,
  articlesNumber: propTypes.number,
  changeSorting: propTypes.func,
  fetchNews: propTypes.func,
  updateArticlesChunk: propTypes.func,
}

const mapStateToProps = (state) => ({
  isFetching: getIsFetching(state),
  articles: getArticlesByNumber(state),
  articlesNumber: getNumberOfArticles(state),
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeSorting,
  fetchNews,
  updateArticlesChunk,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)