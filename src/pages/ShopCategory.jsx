import React from 'react'
import './CSS/ShopCategory.css';
import dropdown_icon from '../components/Assets/dropdown_icon.png'


import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react'; 
import Items from '../components/items/items';
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexShort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-short">
          Short by <img src={dropdown_icon} alt="" />
        </div>
      </div>
     <div className="shopcategory-products">
      {all_product.map((item,i)=>{
        if(props.category===item.category){
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null;
        }
      })}
     </div>
     <div className="shopcategory-loadmore">
      Explore more
     </div>
    </div>
  )
}

export default ShopCategory
