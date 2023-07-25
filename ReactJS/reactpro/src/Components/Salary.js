import React, { useState } from 'react'
import Department from './Department'

export default function Salary(props) {
  const[basic,setbasic]=useState(props.basic)

  const changebasic=(e)=>{
    setbasic(e.target.value)
  }
  
  return (
    <div>
      {/* <p>{props.basic}</p>
        <p>{props.hra}</p>
        <p>{props.sa}</p> */}

        {/* {basic} */}
{/* 
      <div className='col-5 mt-2'>
        <form>
          <div className='form-group'>
            <label>Basic</label>
            <input type='text' className='form-control' value={basic} onChange={changebasic}></input>
          </div>
        </form>
      </div> */}
    </div>
  )
}
