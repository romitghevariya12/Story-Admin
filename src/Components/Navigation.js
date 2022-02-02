import React from 'react';
import Logo from '../logo.svg';

export default function Navigation() {
  return (
    <nav className="navbar navbarHeader">
      <a className="navbar-brand" href="#"><img src={Logo} /></a>
      <button type="submit" className="btn">Log out</button>
    </nav>
  );
}
