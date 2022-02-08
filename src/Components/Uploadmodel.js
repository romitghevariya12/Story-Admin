import React from 'react';
import './Uploadmode.css';

export default function Uploadmodel() {
  return (
    <div className="upload-model">
      <div className="modal fade" id="bannerupload" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Upload Photos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input className="form-control" type="file" id="formFile" />
              <label htmlFor="formFile" className="form-label">
                <h5>Drag & Drop</h5>
                <p className="text">your image here, <span>or browse</span></p>
                <p className="file-name">jpg, png</p>
              </label>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-2" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-3">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
