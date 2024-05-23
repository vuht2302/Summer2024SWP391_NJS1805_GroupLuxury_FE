import '../../style/authentical.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Sửa lỗi tại đây, sử dụng `useNavigate` thay vì `useHistory`

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Sử dụng `useNavigate`

  const handleForgotPassword = (event) => {
    event.preventDefault();
    // Handle forgot password logic here
    console.log('Password reset link sent to:', email);
  };

  return (
    <div className="forgotpassword-container">
      <form className="forgotpassword-form" onSubmit={handleForgotPassword}>
        <h2>Quên mật khẩu</h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="submit-btn">Reset</button>
          <button type="button" className="back-btn" onClick={() => navigate('/login')}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
