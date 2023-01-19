import React from 'react'
import './Products.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';
function Products({id,image,title,price,rating}) {
  const [state,dispatch]=useStateValue()
  const addToBasket=()=>{ 
    dispatch({
      type:'ADD_TO_BASKET',
     item:{
      id:id,
      price:price,
      title:title,
      rating:rating,
      image:image,
     }
    })
  }
  return (
    <div className='product'>
        <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
        {Array(rating).fill().map((items)=>{
          return(<StarIcon/>)
        })}
       </div>
        </div>
       <img src={image} alt="" />
       <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Products