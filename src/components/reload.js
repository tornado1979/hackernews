import React from 'react'

export default ({reload}) => (
  <div className="reload">
    <button type="button" className="btn btn-outline-primary"
    onClick={() => reload()}>Reload</button>
  </div>
)