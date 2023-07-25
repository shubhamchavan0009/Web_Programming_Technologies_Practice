import React from 'react'
import Header from './Header';

export default function Home(props) {
  return (
    <div>
        <Header data></Header>
        <h1>Home Component</h1>
        <div className='cart-wrapper me-auto'>
            <div className='img-wrapper item'>
                <img src={'/phone.png'} style={{width :'100px'}}></img>
            </div>
            <div className='text-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className='btn- wrapper item'>
                <button className='btn btn-primary'
                onClick={()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}}
                >Add To Cart</button>
            </div>
        </div>
    </div>
  )
}
