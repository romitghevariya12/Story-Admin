import React from 'react';
import './Trending.css';
import UploadModel from './Uploadmodel'
import Navigation from './Navigation'
import Sidemenu from './Sidebar'
import Deleteicon from '../delete-icon.svg'

export default function Trending() {
  return (
    <>
    <Navigation />
    <div className="d-lg-flex trending">
      <Sidemenu />
        <div className="page-trending">
          <div className="navbar title">
            <h3>Trending</h3>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#bannerupload" data-bs-whatever="@mdo">Add Trending Photos</button>
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
