import React from 'react'

export default function Header(props) {
    console.warn(props.data);
  return (
    <div>
        <div className='add-to-cart '>
                <span className='cart-count'>{props.data.length}</span>
                <img src={'/addtocart.png'} style={{width :'100px'}}></img>
            </div>
            {/* <h1> {props.data.price}</h1> */}
    </div>
  )
}
