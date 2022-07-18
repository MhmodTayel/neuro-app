import React from 'react';
import swim from '../../images/richard-r-schunemann-ZmZEkO-pb7M-unsplash_ccexpress.jpeg';
import './OurTechnology.css';
import pic from '../../images/Copy of logo_black.PNG';
// import pic1 from '../../images/gentrit-sylejmani-JjUyjE-oEbM-unsplash.jpg'
import pic1 from '../../images/taiki-ishikawa-X3Rd_rbUnOc-unsplash.jpg';
import kid from '../../images/alexandr-podvalny-7kWD0Wnc59E-unsplash.jpg';
import cam from '../../images/camera.jpg';
import additonal from '../../images/additonal.jpg';
import gif from '../../images/giphy.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faScrewdriverWrench,
  faCrosshairs,
  faSignal,
  faArrowsSpin,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export const OurTechnology = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div
        className="divimg responsive"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${kid})`,
          backgroundSize: 'cover',
          height: '80vh',
        }}
      >
        <p className="header"> AI for Safer Pools. </p>
      </div>
      <div
        class="row gx-4 gx-lg-5 justify-content-center mt-5 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="col-lg-8 col-xl-6 text-center">
          <h2 class="mt-0">AI-Powered Drowning detection system!</h2>
          <hr class="divider" />
          <p class=" mb-3">
            Our drowning detection system is a computer vision, AI-powerd system
            that uses the state-of-the-Art technology to monitor, detect and
            alert the lifeguards in only a few moments .
          </p>
        </div>
      </div>
      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-out">
          <div class="row g-5">
            <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>Our Technology</h3>
              <p>
                {' '}
                Neuro-AI-Tronix drowning detection system consists of only above
                water cameras that covers the whole pool with no need for more
                underwater cameras or other sensors. when our AI model detects a
                drowning, it immediately notify the lifeguards with the position
                of the drown on their mobile phones.
              </p>
            </div>

            <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
              <div class="overlapped">
                <img
                  style={{ borderRadius: '9px' }}
                  src={cam}
                  alt=""
                  class="img-fluid"
                />
                <img
                  style={{ borderRadius: '9px' }}
                  src={additonal}
                  alt=""
                  class="img-fluid additonal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*       
      <div class="row gx-4 gx-lg-5 justify-content-center mt-5" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="col-lg-8 col-xl-6 text-center">
          <h2 class="mt-0"> Our Technology </h2>
          <hr class="divider" />
          <p class=" mb-5">Neuro-AI-Tronix drowning detection system uses a very advanced AI technology to monitor all the swimmers in the pool & detects any possible drowning behavior at its very early stages in just a few seconds, even before an expert lifeguard can detect the drowning.</p>

        </div>
      </div> */}

      <section id="cta" class="cta">
        <div class="container" data-aos="zoom-out">
          <div class="row g-5">
            <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>
                How Does <em>Neuro-AI-Tronix</em> work?
              </h3>
              <p>
                {' '}
                Neuro-AI-Tronix drowning detection system consists of only above
                water cameras that covers the whole pool with no need for more
                underwater cameras or other sensors. when our AI model detects a
                drowning, it immediately notify the lifeguards with the position
                of the drown on their mobile phones.
              </p>
            </div>

            <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
              <div class="img">
                <img src={pic1} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="page-section "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="container px-4 px-lg-5 mb-5">
          <h2 class="text-center mt-0 ">Featuers</h2>
          <hr class="divider" />
          <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <FontAwesomeIcon
                  style={{ color: 'rgb(9 135 163)' }}
                  className="mb-3"
                  icon={faScrewdriverWrench}
                  size="3x"
                />
                <h3 class="h4 mb-2">Fast Installation</h3>
                <p class="text-muted mb-0 text-center">
                  Minimum Hardware Required
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <FontAwesomeIcon
                  style={{ color: 'rgb(9 135 163)' }}
                  className="mb-3"
                  icon={faCrosshairs}
                  size="3x"
                />
                <h3 class="h4 mb-2">Quick Detection</h3>
                <p class="text-muted mb-0 text-center">
                  Very fast and accurate detection.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <FontAwesomeIcon
                  style={{ color: 'rgb(9 135 163)' }}
                  className="mb-3"
                  icon={faMobileScreen}
                  size="3x"
                />
                <h3 class="h4 mb-2">Efficiency</h3>
                <p class="text-muted mb-0 text-center">
                  No need for special radiophones to alert lifeguards, just
                  mobile phones!
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <FontAwesomeIcon
                  style={{ color: 'rgb(9 135 163)' }}
                  className="mb-3"
                  icon={faArrowsSpin}
                  size="3x"
                />
                <h3 class="h4 mb-2"> Up to Date</h3>
                <p class="text-muted mb-0 text-center">
                  Periodically updated and continously learning AI model to
                  improve accuaracy over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="row gx-4 gx-lg-5 justify-content-center mt-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div class="col-lg-8 col-xl-6 text-center">
          <h2 class="mt-0"> Why Choose Neuro-AI-Tronix?</h2>
          <hr class="divider" />
          <p class=" mb-5">
            Our R&D team works on very advanced AI-Technology to keep our pools
            safe & drowning-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTechnology;
