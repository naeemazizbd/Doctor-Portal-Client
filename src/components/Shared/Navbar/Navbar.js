import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand text-danger fs-3 fw-bold" to="/"><img src="https://i.ibb.co/MCV7vB6/health-icon-300x300.png" width="30px" alt=""/> Doctors Room</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link me-3 " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-3" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-3" to="#">Dental Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-3 " to="#">Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-3" to="/appointment">Appointment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-3 " to="/dashboard">Dashboard</Link>
        </li>
        <button className="btn btn-danger"><i class="fas fa-user-circle"></i></button>
      </ul>
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default Navbar;