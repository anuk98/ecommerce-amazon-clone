import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css'
import { useStateValue } from './StateProvider';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
function Header() {
  const [{basket,user},dispatch]=useStateValue()
  const login=()=>{
    if(user){
      signOut(auth)

    }
  }
  

  return (
    <div className='header'>
    <Link to='/login'>
     <img className='header_logo' src='images/amazonlogo.png' alt="" />
    </Link>
<div className="header_search">
<input type="text" className="header_searchInput" />
 <SearchIcon className='header_searchIcon' />
</div>
<div className="header_Nav">
  <Link to={!user &&'/login'} className='header_links'>
    <div onClick={login} className="header_options">
      <span className="header_optionsLineone">Hello {user?.email}</span>
      <span className="header_optionsLinetwo">{user?'Sign Out':'Sign In'}</span>
    </div>
  </Link>
  <Link className='header_links'>
    <div className="header_options">
      <span className="header_optionsLineone">Returns</span>
      <span className="header_optionsLinetwo"> & Orders</span>
    </div>
  </Link>
  <Link className='header_links'>
    <div className="header_options">
      <span className="header_optionsLineone">Yours</span>
      <span className="header_optionsLinetwo">Prime</span>
    </div>
  </Link>
  <Link className='header_links' to='/checkout'>
  <div className="header_optionBasket">
   <ShoppingBasketIcon/> 
   <span className="header_optionsLinetwo Basket_Count">{basket.length}</span>
  </div>
  </Link>
</div>
 </div>
  )
}

export default Header