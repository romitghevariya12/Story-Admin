import React from 'react';

export default function Trending() {
  return (
    <div className="d-lg-flex trending">
      <div className="sidebar">
        <ul>
          <li className="list-item active">
            <a href="#" className="">Trending</a></li>
          <li className="list-item">
            <a href="#" className="">Collection</a>
          </li>
        </ul>
      </div>
      <div className="page-trending">
        <div className="navbar title">
          <h3>Trending</h3>
          {/* <button type="submit" className="btn">Add Trending Photos</button> */}

          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Trending Photos</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Upload Photos</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <input class="form-control" type="file" id="formFile" />
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary">Upload</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="banner-photo">
            <div className="photo">
              dadddaddadadadadadadadadaddwedggdfgrgjhj
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
