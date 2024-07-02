import React from 'react'
import '../style/header.css'

function Header() {
  return (
    <div className='header'>
       <nav className='main_nav'>
        <div className="logo">
            <h2>Furni.</h2>
        </div>
        <div className="navbar">
             <div className='unorder'>
               <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Shop</a></li>
                <li> <a href="#">About us</a></li>
                <li> <a href="#">Services</a></li>
                <li> <a href="#">Blog</a></li>
                <li> <a href="#">Contact us</a></li>
               </ul>
             </div>
             <div className="shop">
             <i class="fa-regular fa-user"></i>
             <i class="fa-solid fa-cart-shopping"></i>
             </div>
        </div>
       </nav>

    </div>
  )
}

export default Header