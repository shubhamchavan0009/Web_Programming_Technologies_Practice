import React, { Component } from 'react'

export default class ChildofRef extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:''
      }
    }

    focusoninput=()=>{
        this.props.innerRef.current.focus()
    }

    getData=()=>{
        this.setState({
           data:this.props.innerRef.current.value
        })
        
    }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.focusoninput}>Focus</button>
        <br></br><br></br>
        <button type="button" className="btn btn-primary" onClick={this.getData}>GetData</button>
        <br></br>
        <p>{this.state.data}</p>
      </div>
    )
  }
}
