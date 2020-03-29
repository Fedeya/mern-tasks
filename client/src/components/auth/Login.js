import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(user.email === '' || user.password === '') return;

  }

  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Login</h1>

        <form onSubmit={handleSubmit} >
          <div className="field-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              placeholder="Your Email"
              onChange={handleChange}
            />
          </div>
          <div className="field-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              placeholder="Your Password"
              onChange={handleChange}
            />
          </div>
          <div className="field-form">
            <button className="btn btn-primary btn-block">Login</button>
          </div>
        </form>
        <Link to="/register" className="link-account">
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;