import React from 'react'
/* child of App */
export default function Employee(props) {
  return (
    <div>
        <h2>{props.id}</h2>
        <h2>{props.name}</h2>
        <h2>{props.job}</h2>
    </div>
  )
}
