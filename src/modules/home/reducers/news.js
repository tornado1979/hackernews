import { 
  CHANGE_SORT_ORDER,
  REQUEST_NEWS,
  RECEIVE_NEWS,
  UPDATE_ARTICLES_CHUNK,
 } from '../actions'

export const updateArticlesChunk = (state=[], action) => {
  switch(action.type){
    case UPDATE_ARTICLES_CHUNK:
      return {
          articlesChunk: action.payload,
      }
    default:
      return state
  }
}

export const asyncNews = (state=[], action) => {
  switch (action.type){
    case REQUEST_NEWS:
      return {
        isFetching: true,
    }
    case RECEIVE_NEWS: 
    return {
      articles: [...action.payload.articles],
      isFetching: action.payload.isFetching,
    }
    default:
      return state
  }
}

export const changeSortOder = (state = [], action) => {
  switch(action.type){
    case CHANGE_SORT_ORDER:
      return {
          ...action.payload
      }
    default:
      return state
  }
}

