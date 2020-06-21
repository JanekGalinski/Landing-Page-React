import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <div class="container">
        <a href>nazwa firmy</a>
        <div class="nav-links">
              <a href="#about">o nas</a>
              <a href="#offers">oferta</a>
              <a class="nav-links-contact" href>kontakt</a>
        </div>
      </div>
    </nav>    
  );
}

export default Nav;
