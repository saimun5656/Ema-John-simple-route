import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header-container'>
           <img src={logo} alt="" />
           <div className="pages">
               <a href="/">Shop</a>
               <a href="/orders">Orders</a>
               <a href="/order-review">Order Review</a>
               <a href="/inventory">Manage Inventory</a>
               <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;