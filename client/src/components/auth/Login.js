import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

function Login() {

  const { alert, showAlert } = useContext(AlertContext);
  const { message, auth, logIn } = useContext(AuthContext);

  const history = useHistory();

  const [user, setUser] = useState({ email: '', password: '' });

  useEffect(() => {
    if(message) {
      showAlert(message.msg, message.category);
    }

    if(auth) {
      history.push('/projects');
    }
    // eslint-disable-next-line
  }, [message, auth, history]);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(user.email.trim() === '' || user.password.trim() === '') {
      showAlert('All fields is required', 'alert-error');
      return;
    }

    logIn(user);

  }

  return (
    <div className="form-user">
      { alert && (<div className={`alert ${alert.category}`}>{alert.msg}</div>) }
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
              autoComplete="on"
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