import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import './Subtotal.css'
function Subtotal() {
  const[state,dipatch]=useStateValue();
  return (
    <div className="subtotal">
        <CurrencyFormat 
        renderText={(value)=>{
          return(<>
          <p>Subtotal({state.basket.length} items):<strong>'$'{value}</strong></p>
          <small className='subtotal_gift'>
            <input type="checkbox" /> This order contains a gift
          </small>
          </>
          )}}
        decimalScale={2}
        value={getBasketTotal(state.basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}/>
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal