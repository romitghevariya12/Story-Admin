import React from 'react';
import './Uploadmode.css';

export default function Uploadmodel() {
  return (
    <div className="upload-model">
      <div class="modal fade" id="bannerupload" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Upload Photos</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input class="form-control" type="file" id="formFile" />
              <label for="formFile" class="form-label">
                <h5>Drag & Drop</h5>
                <p className="text">your image here, <span>or browse</span></p>
                <p className="file-name">jpg, png</p>
              </label>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-2" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-3">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
