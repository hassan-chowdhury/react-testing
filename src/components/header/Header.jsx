import React from 'react';
import './styles.scss';
import logo from '../../assets/graphics/logo.svg';


const Header = () => (
  <header>
    <div className="wrap">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  </header>
);

export default Header;
