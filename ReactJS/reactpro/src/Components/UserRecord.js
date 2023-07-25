import axios from 'axios'
import React, { Component } from 'react'
import { Route, Link, Routes } from "react-router-dom";
export default class UserRecord extends Component {

  deleteUser=()=>{
    axios.delete('http://localhost:5000/user/'+this.props.obj._id)
    .then((res)=>{
      alert(res.data)
      window.location.reload(false)
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.username}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.mobile}</td>
        <td>
            <Link to={'/edit/'+this.props.obj._id} class="btn btn-success btn-sm me-2">Edit</Link>
            <button type="button" class="btn btn-danger btn-sm" onClick={this.deleteUser}>Delete</button>
        </td>
      </tr>
    )
  }
}
