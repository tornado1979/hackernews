import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducers from './modules/reducers'
import loggerMiddleware from './middlewares/logger'

export const history = createHistory()

//Initial state
const initialState = {
  sort: {
    sortOrder: 'none',
    sortType: 'none', 
  },
}

const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history),
]

if (process.env.NODE_ENV){
    middleware.push(loggerMiddleware)
}
if(process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if(typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducers,
    initialState,
    composedEnhancers
)

export default store