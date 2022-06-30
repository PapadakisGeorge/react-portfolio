import React from 'react';
import './Header.scss';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png';

function Header() {
  return (
    <header data-testid="header">
      <div className="container header__container" data-testid="header-container">
        <h5 data-testid="header-title">Hello I'm</h5>
        <h1 data-testid="header-subtitle">George</h1>
        <h5 
          className="text-light" 
          data-testid="header-description">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me"
            data-testid="me-container">
          <img 
            src={ME} 
            alt="me"
            data-testid="me-image"/>
        </div>
        <a 
            href="#contact"
            className="scroll__down"
            data-testid="scroll-down">
            Scroll Down
          </a>  
      </div>
    </header>
  )
}

export default Header;