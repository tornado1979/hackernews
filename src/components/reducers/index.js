import { 
  RESET_SEARCH,
  UPDATE_SEARCH,
 } from '../actions'

export const search = (state={searchText:''}, action) => {
  switch(action.type){
    case RESET_SEARCH:
    case UPDATE_SEARCH:
      return {
        ...action.payload,
    }
    default:
      return state
  }
}
