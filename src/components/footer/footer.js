import React from 'react';
import pic from '../../images/new.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGem,
  faHome,
  faPhone,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './footer.css';

export const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start  text-muted ">
        <section class="">
          <div class="container text-center text-md-start mt-5 pt-3">
            <div class="row mt-3">
              <div class="col-md-4 col-lg-4 col-xl-3 mx-auto  my-auto">
                {/* <h6 class="text-uppercase fw-bold mb-4">
                  <FontAwesomeIcon className="icon" icon={faGem} />
                  Neuro-AI-tronix{' '}
                </h6> */}
                <img src={pic} width="200px" />
                {/* <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p> */}
              </div>

              <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">WEBPAGE LINKS</h6>
                <p>
                  <Link to="/OurTechnology">Our Technology</Link>
                </p>
                <p>
                  <Link to="/Contact">Contact</Link>
                </p>
                <p>
                  <Link to="/AboutUs">About Us</Link>
                </p>
              </div>

              <div class="col-md-6 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  {' '}
                  <FontAwesomeIcon className="icon" icon={faHome} />
                  Giza, Cairo, Egypt
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />{' '}
                  <span className="mail">Neuroaitronix@gmail.com</span>
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> + 20 111
                  74 67 283{' '}
                </p>

              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">© 2021 Copyright</div>
      </footer>
    </div>
  );
};
export default Footer;
