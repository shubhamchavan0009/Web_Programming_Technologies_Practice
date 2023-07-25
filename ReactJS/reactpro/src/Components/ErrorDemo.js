import React from 'react'

export default function ErrorDemo(props) {
    if (props.name=='Joker') {
        throw new Error('Not an Employee')
    }
    else{
        return (
            <div>
                <h1>{props.name}</h1>
                <h2>{props.children}</h2>
            </div>
          )
    }
  
}
