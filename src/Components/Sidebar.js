import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <ul>
          <li className="list-item active">
            <a href="#" className="">Trending</a></li>
          <li className="list-item">
            <a href="#" className="">Collection</a>
          </li>
        </ul>
      </div>
  );
}
