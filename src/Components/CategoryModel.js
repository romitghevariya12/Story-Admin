import React from 'react';
import './CategoryModel.css';

export default function CategoryModel() {
  return (
    <div className="category-model">
      <div class="modal fade" id="bannerupload" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Category Name</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter your email" />
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
