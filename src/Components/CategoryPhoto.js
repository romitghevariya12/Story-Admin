import React from 'react';
import './CategoryPhoto.css';
import Navigation from './Navigation'
import UploadModel from './Uploadmodel'
import Sidemenu from './Sidebar'
import Deleteicon from '../delete-icon.svg'

export default function CategoryPhoto() {
  return (
      <>
      <Navigation />
      <div className="d-lg-flex category-photo">
          <Sidemenu />
          <div className="page-category">
              <div className="navbar title">
                  <h3>Valentine's Day</h3>
                  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#bannerupload" data-bs-whatever="@mdo">Add Photos</button>
              </div>
              <UploadModel />
              <div className="row">
                  <div className="banner-photo">
                      <div className="photo">
                          <a className="icon" href="#"><img src={Deleteicon} /></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>
    );
}
