import React from 'react';
import './Collection.css';
import CategoryModel from './CategoryModel'
import CategoryEditModel from './CategoryeditModel'
import Navigation from './Navigation'
import Sidemenu from './Sidebar'
import Editicon from '../edit-icon.svg'

export default function Collection() {
  return (
    <>
    <Navigation />
    <div className="d-lg-flex collection">
      <Sidemenu />
      <div className="page-collection">
        <div className="navbar title">
          <h3>Collection</h3>
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#bannerupload" data-bs-whatever="@mdo">Add Category Name</button>
        </div>
        <CategoryModel />
        <div className="row">
          <div className="category-list">
            <div className="category-name">
              Valentine's Day
              <button type="button" className="btn icon" data-bs-toggle="modal" data-bs-target="#categoryedit" data-bs-whatever="@mdo"><img src={Editicon} /></button>
            </div>
            <CategoryEditModel />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
