import React from 'react';
import './styles.scss';
import logo from '../../assets/graphics/logo.svg';


const Header = () => (
  <header className="headerComponent" test="headerComponent">
    <div className="wrap">
      <div className="logo">
        <img className="logoIMG" test="logoIMG" src={logo} alt="Logo" />
      </div>
    </div>
  </header>
);

export default Header;
