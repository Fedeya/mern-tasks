import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="field-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              placeholder="Your Name"
              onChange={handleChange}
            />
          </div>
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
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              value={user.confirm}
              placeholder="Repeat your Password"
              onChange={handleChange}
            />
          </div>
          <div className="field-form">
            <button className="btn btn-primary btn-block">Sign Up</button>
          </div>
        </form>
        <Link to="/" className="link-account">
          Have an account? Login
        </Link>
      </div>
    </div>
  );
}

export default Register;