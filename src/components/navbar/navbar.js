import React from 'react';
import Pic1 from '../../images/blackmini.jpeg';
import './navbar.css';
import pic from '../../images/Copy of logo_black.PNG';
// import pic from '../../images/Copy 2of logo_black.png'

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar   navbar-expand-lg navbar-dark bg-primary fixed-top  ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            {' '}
            <img src={pic} width="200px" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul class="navbar-nav  mr-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/OurTechnology">
                  Our Technology
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
