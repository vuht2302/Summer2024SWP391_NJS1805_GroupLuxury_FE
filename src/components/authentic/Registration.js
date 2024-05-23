import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../style/authentical.css';
import logo from '../../assets/images/logo.jpg';  // Import hình ảnh trực tiếp

const Registration = () => {
  useEffect(() => {
    document.title = "Đăng Ký";
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Email must be a valid @gmail.com address";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 8 || formData.password.length > 23) {
      formErrors.password = "Password must be between 8 and 23 characters";
    }

    if (formData.password !== formData.passwordConfirm) {
      formErrors.passwordConfirm = "Passwords do not match";
    }

    if (!formData.address) formErrors.address = "Address is required";

    if (!formData.phone) {
      formErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      formErrors.phone = "Phone number must be a valid 10 digit number";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      // You can add logic to handle successful registration here
    } else {
      setErrors(formErrors);
    }
  };

  const handleBackClick = () => {
    navigate("/login");
  };

  return (
    <div className="registration-page">
      <div className="registration-form-container">
        <div className="logo-side">
          <Link to={'/'}>
            <img src={logo} alt="logo Shop" className="logo" />
          </Link>
        </div>
        <div className="separator"></div>
        <div className="form-side">
          <h2>Đăng ký</h2>
          <form onSubmit={handleSubmit} className="registration-form">
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
              {errors.username && (
                <span className="error">{errors.username}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div>
              <input
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              {errors.passwordConfirm && (
                <span className="error">{errors.passwordConfirm}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            {errors.submit && <span className="error">{errors.submit}</span>}
            <div className="register-button">
              <button type="submit">Đăng Ký</button>
            </div>
            <div className="back-button-container">
              <span>Already have an account?</span>
              <button className="back-button" onClick={handleBackClick}>
                Đăng Nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
