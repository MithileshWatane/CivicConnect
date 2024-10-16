import React from 'react'
import './styles/register.css'
import './styles/main.css'
import { Link } from 'react-router-dom'


export default function register() {
  return (
    <>

    <div className="navbar">
      <div className="logo">
        <a href="#">CivicConnect</a>
      </div>
      <ul className="nav-links">
      <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
      </ul>
    </div>
    <div className="register-wrapper">
      <div className="register-content">
        <div id="citizen" className="register-card tab-content active">
          <h2>Create a Citizen Account</h2>
          <p>Join us for a better experience</p>
          <form action="#" method="POST">
            <input type="text" placeholder="Username" required="" />
            <input type="email" placeholder="Email" required="" />
            <input type="password" placeholder="Password" required="" />
            <input type="password" placeholder="Confirm Password" required="" />
            <button type="submit" className="register-btn">
              Register as Citizen
            </button>
          </form>
          <div className="register-links">
          <li>
              <Link to="/login">Already have an account? Login</Link>
            </li>
          </div>
        </div>
        <div id="government" className="register-card tab-content">
          <h2>Create a Government Account</h2>
          <p>Join us to manage civic matters effectively</p>
          <form action="#" method="POST">
            <input type="text" placeholder="Authority Name" required="" />
            <input type="email" placeholder="Email" required="" />
            <input type="password" placeholder="Password" required="" />
            <input type="password" placeholder="Confirm Password" required="" />
            <button type="submit" className="register-btn">
              Register as Authority
            </button>
          </form>
          <div className="register-links">
           <li>
              <Link to="/login">Already have an account? Login</Link>
            </li>    
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <p>© 2024 CivicConnect. All rights reserved.</p>
    </footer>
  </>
  
  )
}
