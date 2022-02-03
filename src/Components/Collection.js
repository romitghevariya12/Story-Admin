import React from 'react';
import CategoryMOdel from './CategoryModel'
import Sidemenu from './Siddebar'
import Deleteicon from '../delete-icon.svg'

export default function Collection() {
  return (
    <div className="d-lg-flex collection trending">
      <Sidemenu />
      <div className="page-trending">
        <div className="navbar title">
          <h3>Collection</h3>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#bannerupload" data-bs-whatever="@mdo">Add Category Name</button>
          <CategoryMOdel />
        </div>
        <div className="row">
          <div className="banner-photo">
            <div className="photo">
              <a className="icon" href="#"><img src={Deleteicon} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
