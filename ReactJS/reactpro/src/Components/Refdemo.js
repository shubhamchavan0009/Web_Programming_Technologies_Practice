import React, { Component } from 'react'
import ChildofRef from './ChildofRef'
import ChildforReffun from './ChildforReffun'

export default class Refdemo extends Component {
    constructor(props) {
      super(props)
        this.txtRef=React.createRef()
    }

    focusoninput=()=>{
        this.txtRef.current.focus()
    }

  render() {
    return (
      <div>
        <h3>Parant Comp</h3>
        {/* <div className="mb-3 col-4">
          <label for="" className="form-label">Username</label>
          <input type="text" className="form-control" ref={this.txtRef}></input>
        </div> */}
         <button type="button" className="btn btn-primary" onClick={this.focusoninput}>Focus</button>
        <h3>Child Comp</h3>
        {/* <ChildofRef innerRef={this.txtRef}></ChildofRef> innerRef is prop */}
        <ChildforReffun ref={this.txtRef}></ChildforReffun>
       
      </div>
    )
  }
}
