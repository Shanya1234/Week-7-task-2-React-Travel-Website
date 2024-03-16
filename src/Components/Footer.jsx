import React from "react";

import Classes from "../Styles/Footer.module.css";
// import footerLogo from "../assets/footerlogo.jpg";
import footerLogo from "../assets/download.png";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>880130xxxxx</p>
          <p>jainshanya77@gmail.com</p>
          
          <a href="https://www.linkedin.com/in/shanya-jain-054228232/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Shanya1234">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
              Sumit <span>Travels</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Get Notify</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
