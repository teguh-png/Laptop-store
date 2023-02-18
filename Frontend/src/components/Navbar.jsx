import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <div className="container-fluid mb-4 bg-secondary">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '100px' }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand me-0">
            <img src={logo} alt="" style={{ width: '100px', height: '50px' }} />
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav nav">
              <li className="nav-item">
                <Link to="/" className="nav-link fs-5 me-5 fw-bold">
                  LaptopStore
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/manajemen-product" className="nav-link fs-5 me-5 fw-bold">
                  Manajemen Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/katalog-product" className="nav-link fs-5 me-5 fw-bold">
                  Katalog Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link fs-5 me-5 fw-bold">
                  About Company
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-end me-4">
            <ul className="navbar-nav">
              <li className="nav-item justify-content-end">
                <Link to="/login" className="nav-link fs-5 fw-bold">
                  Login
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link to="/register" className="nav-link fs-5 fw-bold">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
