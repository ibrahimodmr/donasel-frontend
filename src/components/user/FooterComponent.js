// src/components/FooterComponent.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterComponent = () => {
  return (
    <footer className="w-full py-4 mt-6 text-center text-white bg-black">
      <div className="flex flex-col items-center">
        <img src={`${process.env.PUBLIC_URL}/donasel_logo.png`} alt="Logo" className="w-24 mb-4" />
        <div className="flex mb-4 space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/donaselmobilya/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="tel: +905320559362" className="text-2xl text-white">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
      </div>
      <p className="text-sm">
        &copy; DONASEL HOME FURNITURE. Tüm hakları saklıdır.
        <span className="ml-20">İbrahim Özdemir</span>
      </p>
    </footer>
  );
};

export default FooterComponent;
