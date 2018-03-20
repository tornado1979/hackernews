import React, { Component } from 'react'

class Loader extends Component {
  constructor(props){
    super(props)
    this.updateProgress = this.updateProgress.bind(this)
    this.state = {progress: this.props.progress}

    this.nIntervalId = setInterval(() => {
      this.setState({progress: this.state.progress + 1});
    }, 100);
  }

  componentWillUnmount(){
    console.log('loader unmounts')
    clearInterval(this.nIntervalId)
  }    

  updateProgress(){
      if(this.state.progress === 99){
        clearInterval(this.nIntervalId)
      }
      return <div className="progress">
        <div className="progress-bar" role="progressbar" 
          aria-valuenow="100" 
          aria-valuemin="0" aria-valuemax="100" style={{'width': `${this.state.progress}%`}}>{this.state.progress}%
         </div>
       </div>
  } 

  render(){
    return(
      <div>
        {this.updateProgress()}
      </div>
    )
  }
}

export default Loader