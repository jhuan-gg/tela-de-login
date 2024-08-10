import React from 'react';
import './styles.css';

const LoginForm = () => {
  return (// construção do container principal 
    <div className="login-container">
      <h1>Sign in to your account</h1> 
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username or email address</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-options">
          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="login-button">Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
