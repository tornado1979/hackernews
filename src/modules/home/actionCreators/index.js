import axios from "axios";
import { INIT_NEWS_URL } from '../../../constants'

//action costants
import { 
  CHANGE_SORT_ORDER,
  RECEIVE_NEWS,
  REQUEST_NEWS,
  SERVER_CONNECTION_ERROR,
  UPDATE_ARTICLES_CHUNK,
 } from '../actions'

const requestNews = () => {
  return {
    payload: {isFetching: true},
    type: REQUEST_NEWS,
  }
}

const receiveNews = (data) => {
  console.log('reducer receive news')
  return {
    payload: {
      articles: data,
      isFetching: false,
    },
    type: RECEIVE_NEWS,
  }
}

const error = (err) => {
    return {
        payload: err,
        type: SERVER_CONNECTION_ERROR,
    }
}

export const fetchNews = () => (dispatch) => {
  dispatch(requestNews())
  return axios.get(INIT_NEWS_URL)
    .then((response)=> {
        return response.data.hits
    })
    .then((news) => {
      return dispatch(receiveNews(news))
    })
    .catch((err) => {
      return dispatch(error(err))
    })
}

export const updateArticlesChunk = (articlesVisible) => (dispatch) => {
  return dispatch({
    payload: articlesVisible,
    type: UPDATE_ARTICLES_CHUNK,
  })
}

export const changeSorting = (sortType, sortOrder) => (dispatch) => {
  console.log('change sorting')
  return dispatch({
    payload: {
      sortOrder,
      sortType,
    },
    type: CHANGE_SORT_ORDER,
  })
}

