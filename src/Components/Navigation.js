import React from 'react';
import './Navigation.css';
import Logo from '../logo.svg';
import Sidemenu from './Sidebar'

export default function Navigation() {
  return (
    <div className="menu">
      <nav className="navbar navbarHeader">
        <a className="navbar-brand" href="#"><img src={Logo} /></a>
        <button type="submit" className="btn">Log out</button>
      </nav>
      {/* <Sidemenu /> */}
    </div>
  );
}
