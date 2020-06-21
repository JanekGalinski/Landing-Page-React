import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <div className="container">
        <a href>nazwa firmy</a>
        <div className="nav-links">
              <a href="#about">o nas</a>
              <a href="#offers">oferta</a>
              <a className="nav-links-contact" href>kontakt</a>
        </div>
      </div>
    </nav>    
  );
}

export default Nav;
