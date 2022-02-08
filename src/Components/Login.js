import React from 'react';
import './Login.css';

export default function Login() {
  return(
    <div className="container login">
        <div className="row">
            <div className="col-lg-6 login-model">
                <h2>Log In</h2>
                  <form>
                      <div className="email">
                          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                      </div>
                      <div className="password">
                          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your Password" />
                      </div>
                      <button type="submit" className="btn">Log IN</button>
                  </form>
            </div>
        </div>
    </div>
  );
}
