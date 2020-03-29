import React from 'react';

function Login() {

  const handleChange = e => {

  }

  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Login</h1>

        <form>
          <div className="field-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
              placeholder="Your Password"
              onChange={handleChange}
            />
          </div>
          <div className="field-form">
            <button className="btn btn-primary btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;