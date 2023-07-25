import axios from 'axios'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import UserRecord from './UserRecord'
export default class Getusers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [], errormsg: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/user')
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
            .catch((err) => {
                this.setState({
                    errormsg: 'Something went wrong'
                })
            })
    }
    Datatable() {
        return this.state.users.map((res, i) => {
            return <UserRecord obj={res} key={i}></UserRecord>
        })
    }
    render() {
        if (this.state.users.length != 0) {
            return (
                <div>
                    <h3>User List</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.Datatable()}
                        </tbody>
                    </Table>
                </div>      
            )
        } 
        else {
            return <h3>{this.state.errormsg}</h3>
        }
        
      
    }
}
