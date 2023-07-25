import React from 'react'

export default function Department(props) {
  return (
    <div>
        <p>{props.deptno}</p>
        <p>{props.dname}</p>
    </div>
  )
}
