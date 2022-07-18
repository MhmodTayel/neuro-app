import React from 'react';
import kid from '../../images/alexandr-podvalny-7kWD0Wnc59E-unsplash.jpg';
import swim from '../../images/richard-r-schunemann-ZmZEkO-pb7M-unsplash_ccexpress.jpeg';
import pool from '../../images/aboutuspool.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const AboutUs = () => {
  return (
    <div>
      <div
        className="divimg responsive"
        style={{
          backgroundImage: `url(${pool})`,
          backgroundSize: 'cover',
          height: '80vh',
        }}
      >
        <p className="header p" style={{ color: '#143e55' }}>
          {' '}
          Who we are?{' '}
        </p>
      </div>
      <div
        class="row gx-4 gx-lg-5 justify-content-center mt-5 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="col-lg-8 col-xl-6 text-center">
          <h2 class="mt-0">About Us</h2>
          <hr class="divider" />
          <p class=" mb-3">
            {' '}
            Neuro-AI-Tronix is a promising startup located in Egypt. Our main
            target is to have safer pools for everyone using AI technology. Our
            product is a drowning detection system that helps lifeguards in
            early drowning detection. Our service is currently confined to
            Egypt’s clients, but it will be available worldwide soon.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
