import React from "react";
import "../less/footer.less";

// Import icons (place your SVGs/PNGs in public/assets/icons/social/)
import FacebookIcon from "/assets/icons/social/facebook-svgrepo-com.svg";
import LinkedinIcon from "/assets/icons/social/linkedin-svgrepo-com.svg";
import TwitterIcon from "/assets/icons/social/twitter-svgrepo-com.svg";
import InstagramIcon from "/assets/icons/social/instagram-alt-svgrepo-com.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <span>©2025 Chaldal PLC</span>
          <a href="/terms">Terms of Use</a>
          <a href="/privacy">Privacy policy</a>
        </div>

        <div className="footer-right">
          <a href="https://www.facebook.com/chaldalcom" target="_blank" rel="noreferrer">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/chaldalcom/" target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://x.com/chaldal" target="_blank" rel="noreferrer">
            <img src={TwitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/chaldal_bd/" target="_blank" rel="noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
