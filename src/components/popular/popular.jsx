import React from 'react'
import data_product from '../Assets/data'
import Items from '../items/items'
import './Popular.css'
const Popular = () => {
  return (
    <div>
      <div className='popular'>
      <h1>POPULAR IN WOMAN</h1>
      <hr />
      <div className='popular-item'>
       {data_product.map((item,i)=>{
        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
       })}
      </div>
    </div>
    </div>
  )
}

export default Popular;
