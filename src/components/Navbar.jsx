import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Perform logout logic here
    localStorage.removeItem('refresh_token')
    console.log('User logged out')
    navigate('/login') // Redirect to login page after logout
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark main-nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/images/global/logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto py-2">
            <li className="nav-item px-3">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item  px-3">
              <Link className="nav-link" to="/garasi">
                Garasi
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item px-3">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            ) : (
              <li className="nav-item px-3">
                <Link className="button1" to="/masuk">
                  Login
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item px-3">
                <button className="button1" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
