import React from 'react'
import propTypes from 'prop-types'

const CustomButton = ({articles, onClick}) => (
  <button type="button"
    className="btn btn-primary btn-lg btn-block" 
    onClick={ev => onClick(articles,ev)} >
     load more news..
  </button>
)

CustomButton.propTypes = {
  articles: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
}

export default CustomButton