import React, { Component } from 'react'
import UserContext from './UserContext'

export default class Comp3 extends Component {
    static contextType=UserContext
  render() {
    return (
      <div>
        {this.context.username}
        {this.context.pwd}
        </div>
    )
  }
}

// Comp3.contextType=UserContext