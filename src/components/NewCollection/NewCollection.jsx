import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import Items from '../items/items'
const NewCollection = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <div className="collections">
      {new_collection.map((item,i)=>{
        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
      })}
      </div>
    </div>
  )
}

export default NewCollection
