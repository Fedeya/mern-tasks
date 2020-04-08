import React, { useContext } from 'react';

import AuthContext from '../../context/authentication/authContext';

function Header() {

  const { user, logOut } = useContext(AuthContext);

  return (
    <header className="app-header">
      <p className="name-user">Hello <span>{user && user.name}</span></p>
      <nav className="nav-main">
        <button 
          className="btn btn-blank close-session"
          onClick={logOut}
        >
          Log Out
        </button>
      </nav>
    </header>
  );
}

export default Header;