import React from 'react'
import Header from './Header'
import './Home.css'
import Products from './Products'
function Home() {
  return (
    <div className="home">
        <img className='home_image' src="images/banner.jpg" alt="" />
       <Header/>
     <div className="product_row">
     <Products 
       id='1234567'
       title='Iphone 14'
       price={130000}
       rating={4}
       image='https://pngimg.com/uploads/iphone_14/small/iphone_14_PNG9.png'
       />
        <Products 
       id='1234566'
       title='Macbook'
       price={150000}
       rating={5}
       image='https://pngimg.com/uploads/macbook/small/macbook_PNG80.png'
       />
     </div>
     <div className="product_row">
     <Products 
       id='1234565'
       title='Bluetooth Speaker'
       price={30000}
       rating={3}
       image='https://pngimg.com/uploads/audio_speakers/small/audio_speakers_PNG11154.png'
       />
        <Products 
       id='1234564'
       title='Earphone'
       price={1300}
       rating={4}
       image='https://pngimg.com/uploads/earphones/small/earphones_PNG33.png'
       />
        <Products 
       id='1234563'
       title='Go Pro'
       price={80000}
       rating={4}
       image='https://pngimg.com/uploads/gopro/small/gopro_PNG102046.png'
       />
     </div>
     <div className="product_row">
     <Products 
       id='1234562'
       title='Monitor'
       price={130000}
       rating={4}
       image='https://pngimg.com/uploads/monitor/small/monitor_PNG101647.png'
       />
        
     </div>
    </div>
  )
}

export default Home