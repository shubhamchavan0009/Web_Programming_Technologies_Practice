import axios from 'axios'
import React, { Component } from 'react'

export default class UserSubmit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: { Name: '', Email: '', Mobile: '' }
        }
    }

    changehandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    onCreateUser = (event) => {
    //    alert(JSON.stringify(this.state.user))
        event.preventDefault()
       
        axios.post('http://localhost:5000/user/submit',this.state.user).then((res)=>{
            console.log(res);
            alert(res.data)
        })
        .catch(()=>console.log("Not inserted"))
        
    }
    render() {
        return (
            <div>
                <h1>Add User</h1>
                <form>
                    <div className='form-group col-6'>
                        <label>Name </label>
                        <input type='text' name='Name' className='form-control'  value={this.state.user.Name} onChange={this.changehandler}></input>
                    </div>
                    <div className='form-group col-6'>
                        <label>Email</label>
                        <input type='text' name='Email' className='form-control' value={this.state.user.Email} onChange={this.changehandler}></input>
                    </div>
                    <div className='form-group col-6'>
                        <label>Mobile</label>
                        <input type='text' name='Mobile' className='form-control' value={this.state.user.Mobile} onChange={this.changehandler}></input>
                    </div>
                    <button className='btn btn-primary mt-2' onClick={this.onCreateUser}>Add User</button>
                </form>
            </div>
        )
    }
}
