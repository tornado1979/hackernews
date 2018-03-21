import { 
  asyncNews as news,
  updateArticlesChunk,
  changeSortOder,
 } from '../home/reducers/news'

 import {
  search,
 } from '../../components/reducers'

import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  news,
  config: updateArticlesChunk,
  search,
  sort: changeSortOder,
})

export default rootReducers