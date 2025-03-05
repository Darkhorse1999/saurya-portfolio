import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Saurya Chaudhary</h1>
        {/* <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul> */}
        <div className="footer__social">
          <a
            href="https://www.instagram.com/sauryachaudhary_/"
            className="footer__social-link"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://medium.com/@saurya456"
            className="footer__social-link"
          >
            <i class="uil uil-medium-m"></i>
          </a>
          <a
            href="https://github.com/Darkhorse1999"
            className="footer__social-link" 
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Saurya Chaudhary . All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
