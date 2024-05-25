import React, { useState } from 'react';
import '../../style/authentical.css';
import { signInWithGoogle } from './firebase';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

 

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Đăng Nhập</button>
        <h4> Or </h4>
        <div className="social-login">
          <div className="social-btn google-wrapper">
            <button type="button" className="social-btn google"onClick={signInWithGoogle} >Đăng nhập bằng Google</button>
          </div>
        </div>
    
      </form>
      <div className="footer">
        <a href="/forgot-password">Quên mật khẩu?</a>
        <a href="/register">Đăng ký</a>
      </div>
    </div>
  );
};

export default Login;
