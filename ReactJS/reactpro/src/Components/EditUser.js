import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {
    const [user, setUser] = useState({})
    const navigate=useNavigate()
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/user/${id}`)
        .then((res)=>{
            // console.log(res.data);
            setUser(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
        // loaddata()
    },[])

    // const loaddata=async ()=>{
    //     let data=await axios.get(`http://localhost:5000/user/${id}`)
    //     setUser(res.data)
    // }
    const changehandler=(event)=>{
        const{name,value}=event.target
        setUser({...user,[name]:value})
    }

    const onUpdateUser=(event)=>{
        event.preventDefault()
        axios.put(`http://localhost:5000/user/update/${id}`,user)
        .then((res)=>{
            navigate('/users')
        })
    }
    return (
        <div>
            <h1>Edit User</h1>
            <form>
                <div className='form-group col-6'>
                    <label>Name </label>
                    <input type='text' name='Name' className='form-control' value={user.Name} onChange={changehandler()}></input>
                </div>
                <div className='form-group col-6'>
                    <label>Email</label>
                    <input type='text' name='Email' className='form-control' value={user.Email} onChange={changehandler()}></input>
                </div>
                <div className='form-group col-6'>
                    <label>Mobile</label>
                    <input type='text' name='Mobile' className='form-control' value={user.Mobile} onChange={changehandler()}></input>
                </div>
                <button className='btn btn-primary mt-2' onClick={onUpdateUser()}>Update User</button>
            </form>
        </div>
    )
}
