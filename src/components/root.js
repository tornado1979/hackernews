import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Home from '../modules/home'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  </Provider>
)
 
Root.propTypes = {
  store: PropTypes.object.isRequired
}
 
export default Root