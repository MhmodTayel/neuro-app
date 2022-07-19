import React from 'react';
import './Contact.css';
import img from '../../images/1.jpg';
import pic from '../../images/Copy of logo_black.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faGem,
  faHome,
  faPhone,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
export const Contact = () => {
  return (
    <div>
      <br></br>
      <br />
      <div
        className="row gx-4 gx-lg-5 justify-content-center mt-5 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-lg-8 col-xl-6 text-center">
          <p className=" mb-3 text-center">
            {' '}
            <img src={pic} className="mx-auto" width="500px" />{' '}
          </p>
        </div>
      </div>

      <div
        class="row gx-4 gx-lg-5 justify-content-center mt-5 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="col-lg-8 col-xl-6 text-center">
          <h2 class="mt-0">Contact Us</h2>
          <hr class="divider" />
          {/* <p class=" mb-3">
            {' '}
            Neuro-AI-Tronix is a promising startup located in Egypt. Our main
            target is to have safer pools for everyone using AI technology. Our
            product is a drowning detection system that helps lifeguards in
            early drowning detection. Our service is currently confined to
            Egypt’s clients, but it will be available worldwide soon.
          </p> */}
          <div class="text-center ">
            <p className="text-center">
              {' '}
              <FontAwesomeIcon className="icon" icon={faHome} />
              Giza, Cairo, Egypt
            </p>
            <p className="text-center">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />{' '}
              <span className="mail">Neuroaitronix@gmail.com</span>
            </p>
            <p className="text-center">
              <FontAwesomeIcon className="icon" icon={faPhone} /> + 20 111 74 67
              283{' '}
            </p>

          </div>
        </div>
      </div>

      {/* <section class="page-section bg-light mt-5" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={img} alt="..." />
                            <h4>Parveen Anand</h4>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={img} alt="..." />
                            <h4>Diana Petersen</h4>
                            <p class="text-muted">Lead Marketer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={img} alt="..." />
                            <h4>Larry Parker</h4>
                            <p class="text-muted">Lead Developer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section> */}
    </div>
  );
};
export default Contact;
