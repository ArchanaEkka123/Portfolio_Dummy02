import React from "react";
import "./footer.scss";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
       
          <div className="social-media">
            <img
              className=""
              src="/images/lg_instagram.svg"
              alt="Description of the image"
            />
            <img
              className=""
              src="/images/lg_linkedin.svg"
              alt="Description of the image"
            />
            <img
              className=""
              src="/images/lg_envelope.svg"
              alt="Description of the image"
            />
          </div>
          <p className="footer-content">Madelyn Torff 2021 </p>
       
       
      </div>
      <img
            className="mt-[-100px] w-full"
            src="/images/footer-wave.svg"
            alt="Description of the image"
            
          />
    </footer>
  );
};

export default Footer;
