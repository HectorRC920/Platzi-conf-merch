import React from 'react';
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className='fas fa-shopping-basket' title='Checkout'></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
