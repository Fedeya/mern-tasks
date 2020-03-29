import React from 'react';

function Header() {
  return (
    <header className="app-header">
      <p className="name-user">Hello <span>Federico</span></p>
      <nav className="nav-main">
        <a href="#!">Log Out</a>
      </nav>
    </header>
  );
}

export default Header;