//action costants
import { 
  UPDATE_SEARCH,
  RESET_SEARCH
 } from '../actions'

export const updateSearch = (searchText) => (dispatch) => {
  return dispatch({
    payload: {searchText},
    type: UPDATE_SEARCH,
  })
}

export const resetSearch = () => (dispatch) => {
  return dispatch({
    payload:  {searchText:''},
    type: RESET_SEARCH,
  })
}
