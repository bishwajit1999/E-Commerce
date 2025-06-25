import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
       <h1>EXCLUSIVE </h1>
       <h1>OFFER FOR YOU</h1>
       <p>only on best seller products</p>
       <button>Chech Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
