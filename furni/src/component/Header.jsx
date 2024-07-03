import React from 'react'
import '../style/header.css';
import { useNavigate } from 'react-router-dom'


function Header() {
   const navigate = useNavigate();


  return (
    <div className='header'>
       <nav className='main_nav'>
        <div className="logo">
            <h2>Furni.</h2>
        </div>
        <div className="navbar">
             <div className='unorder'>
               <ul>
                <li> <a href="#" onClick={()=> navigate('/')} >Home</a></li>
                <li> <a href="#" onClick={()=> navigate('/shop')} >Shop</a></li>
                <li> <a href="#"onClick={()=> navigate('/about')} >About</a></li>
                <li> <a href="#" onClick={()=> navigate('/services')} >Services</a></li> 
                <li> <a href="#" onClick={()=> navigate('/blog')} >Blog</a></li>
                <li> <a href="#" onClick={()=> navigate('/contact')} >Contact</a></li>
               </ul>
             </div>
             <div className="shop">
             <i className="fa-regular fa-user"></i>
             <i className="fa-solid fa-cart-shopping"></i>
             </div>
        </div>
       </nav>

    </div>
  )
}

export default Header