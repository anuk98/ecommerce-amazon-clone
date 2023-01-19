import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@mui/icons-material/Star'
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,image,title,rating,price}) {

    const[state,dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
  return (
    <div className="checkoutproduct">
        <img className='checkoutproduct_image' src={image} alt="no immmm" />
        <div className="checkoutproduct_info">
            <p className="checkoutproduct_title">{title}</p>
            <p className="checkoutproduct_price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="checkoutproduct_rating">
        {Array(rating).fill().map((items)=>{
          return(<StarIcon/>)
        })}
       </div>
       <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct