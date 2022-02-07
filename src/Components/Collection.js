import React from 'react';
import './Collection.css';
import CategoryModel from './CategoryModel'
import Sidemenu from './Sidebar'
import Editicon from '../edit-icon.svg'

export default function Collection() {
  return (
    <div className="d-lg-flex collection">
      <Sidemenu />
      <div className="page-collection">
        <div className="navbar title">
          <h3>Collection</h3>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#bannerupload" data-bs-whatever="@mdo">Add Category Name</button>
        </div>
        <CategoryModel />
        <div className="row">
          <div className="category-list">
            <div className="category-name">
              Valentine's Day
              <a className="icon" href="#"><img src={Editicon} /></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
