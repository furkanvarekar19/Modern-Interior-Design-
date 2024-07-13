import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../style/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                <h2>Furni.</h2>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={()=> navigate('/')}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={()=> navigate('/shop')}>Shop</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={()=> navigate('/about')}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={()=> navigate('/services')}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={()=> navigate('/blog')}>Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={()=> navigate('/contact')}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links"  id='nav-links'>
                        <i class="fa-regular fa-user"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links"  id='nav-links'>
                      
                        <i class="fa-solid fa-cart-shopping"></i>

                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;