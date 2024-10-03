import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  

  return (
    <header className="Header">
    <div className="item">
      <div className="logo">HARMAIG</div>
      <nav>
        <ul>
          <Link to='/login'>
          <li>Overview</li>
          </Link> 
          <li>My_Profile</li>
           <li>My_Orders</li>
          <li>My_Wishlist</li>
          <li>My_Cart</li>
        </ul>
      </nav>
    </div>
      <div className="user-section">
        <button className="logout">Logout</button>
        <div className="user-icon">👤</div>
      </div>
    </header>
    
    
  );
};

export default Header;
