import React from 'react'
import './styles/login.css'
import './styles/main.css'
import { Link } from 'react-router-dom'


export default function login() {
  return (
    <>
    <nav className="navbar">
      <div className="logo">

          <Link to="/login">Login</Link>
                  
        </div>
      <ul className="nav-links">
      <li>
          <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
      </ul>
    </nav>
    {/* Wrapper for Login and Footer */}
    <div className="wrapper">
      <div className="login-container">
        <div className="login-card citizen-login">
          <h2>Citizen Login</h2>
          <p>Login to track or resolve complaints</p>
          <form>
            <label htmlFor="citizen-email">Email</label>
            <input
              type="email"
              id="citizen-email"
              placeholder="Enter your email"
              required=""
            />
            <label htmlFor="citizen-password">Password</label>
            <input
              type="password"
              id="citizen-password"
              placeholder="Enter your password"
              required=""
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="login-links">
              <a href="#">Forgot Password?</a>
              <li>
              <Link to="#contact">Contact</Link>
            </li>
            </div>
          </form>
        </div>
        <div className="login-card government-login">
          <h2> Authority Login</h2>
          <p>Login to manage civic complaints</p>
          <form>
            <label htmlFor="gov-email">Email</label>
            <input
              type="email"
              id="gov-email"
              placeholder="Enter your email"
              required=""
            />
            <label htmlFor="gov-password">Password</label>
            <input
              type="password"
              id="gov-password"
              placeholder="Enter your password"
              required=""
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="login-links">
              <a href="#">Forgot Password?</a>
              <li>
              <Link to="#contact">Contact</Link>
            </li>            
            </div>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 CivicConnect. All Rights Reserved.</p>
      </footer>
    </div>
  </>
  
  )
}
