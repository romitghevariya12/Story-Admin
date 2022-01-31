import React from 'react';
import Logo from '../logo.svg';

export default function Navigation() {
  return (
    <>
    <nav className="navbar navbarHeader">
      <a className="navbar-brand" href="#"><img src={Logo} /></a>
      <button type="submit" className="btn">Log out</button>
    </nav>

    <div className="sidebar">
      <ul>
        <li className="list-item active">
          <a href="#" className="">Trending</a></li>
        <li className="list-item">
          <a href="#" className="">Collection</a>
        </li>
      </ul>
    </div>

    </>
  );
}
