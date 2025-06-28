import React, { useState } from "react";
import "./AuthModal.css";
import { useAuth } from "../../context/AuthContext";

const AuthModal = () => {
  const { login, setShowAuthModal } = useAuth();
  const [isSignUp, setIsSignUp] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignUp = (e) => {
  e.preventDefault();
  if (!form.name || !form.email || !form.password) {
    alert("Please fill all fields");
    return;
   localStorage.setItem("ecoUser", JSON.stringify(form));
  login(form); // set user in context
};
  }
<button onClick={() => setIsSignUp(!isSignUp)}>
  {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
</button>

  const handleSignIn = (e) => {
  e.preventDefault();
  const savedUser = JSON.parse(localStorage.getItem("ecoUser"));
  if (
    savedUser &&
    savedUser.email === form.email &&
    savedUser.password === form.password
  ) {
    login(savedUser);
  } else {
    alert("Invalid email or password!");
  }
};

  const handleSubmit = e => {
    e.preventDefault();
    login(form);
  };

  return (
    <div className="auth-modal-backdrop">
      <div className={`auth-modal-animated ${isSignUp ? "right-panel-active" : ""}`}>
        <div className="auth-modal-form-container sign-up-container">
          <form onSubmit={handleSubmit} style={{alignItems:'flex-start'}}>
            <h2 style={{alignSelf:'center'}}>Create Account</h2>
            <div className="social-container" style={{alignSelf:'center'}}>
              <button type="button" className="social google-social" onClick={() => alert('Google Sign Up coming soon!')}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
              </button>
            </div>
            <span style={{alignSelf:'center'}}>or use your email for registration</span>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <button type="submit" className="auth-action-btn" style={{alignSelf:'center'}}>Sign Up</button>
          </form>
        </div>
        <div className="auth-modal-form-container sign-in-container">
          <form onSubmit={handleSignIn} style={{alignItems:'flex-start'}}>
            <h2 style={{alignSelf:'center'}}>Sign In</h2>
            <div className="social-container" style={{alignSelf:'center'}}>
              <button type="button" className="social google-social" onClick={() => alert('Google Sign In coming soon!')}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
              </button>
            </div>
            <span style={{alignSelf:'center'}}>or use your email and password</span>
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
            <a href="#" className="forgot-link">Forgot Your Password?</a>
            <button type="submit" className="auth-action-btn" style={{alignSelf:'center'}}>Sign In</button>
          </form>
        </div>
        <div className="auth-modal-overlay-container">
          <div className="auth-modal-overlay">
            <div className="auth-modal-overlay-panel overlay-left">
              <h2>Welcome Back!</h2>
              <p>Enter your personal details to use all of site features</p>
              <button className="ghost" onClick={() => setIsSignUp(false)}>Sign In</button>
            </div>
            <div className="auth-modal-overlay-panel overlay-right">
              <h2>Hello, Friend!</h2>
              <p>Register with your personal details to use all of site features</p>
              <button className="ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
            </div>
          </div>
        </div>
        <button className="auth-modal-close" onClick={() => setShowAuthModal(false)}>×</button>
      </div>
    </div>
  );
};

export default AuthModal;