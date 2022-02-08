import React from 'react';
import './CategoryeditModel.css';

export default function CategoryeditModel() {
  return (
    <div className="category-edit-model">
      <div className="modal fade" id="categoryedit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Category</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input className="form-control" aria-describedby="emailHelp" placeholder="Enter your Category Name" />
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" role="switch" id="listnewcategory" />
                  <label className="form-check-label" htmlFor="listnewcategory">New Category</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" role="switch" id="listnewcategory" />
                  <label className="form-check-label" htmlFor="listnewcategory">Hide Category</label>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-2" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-3">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
