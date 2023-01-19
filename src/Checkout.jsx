import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';

function Checkout() {
  const[state,dispatch]=useStateValue();

  return (
    <div className='checkout'>
     <div className="checkout_left">
     {state.basket.length===0?(<div><h2>Your Shopping Basket is empty</h2>
       <p>You have no item in your basket.To buy one or more item,click 'Add to Basket' next to the item </p></div>):(
       <div><h2 className='checkout_title'>Your Shopping Basket </h2>
       {state.basket.map((item)=>{
        console.log(item.image);
        return(<CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating} />)
       })}
       </div> 
       )} 
     </div>
     {state.basket.length>0 &&(<div className='checkout_right'>
      <Subtotal/>
     </div>)}
    </div>
  )
}

export default Checkout