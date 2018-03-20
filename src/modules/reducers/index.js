import { 
  asyncNews as news,
  updateArticlesChunk,
  changeSortOder,
 } from '../home/reducers/news'


import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  news,
  config: updateArticlesChunk,
  sort: changeSortOder,
})

export default rootReducers