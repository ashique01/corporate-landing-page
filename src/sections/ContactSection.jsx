import React from "react";
import "../less/contactSection.less";

// Import icons
import PhoneIcon from "/assets/icons/contact/phone.svg";
import WhatsappIcon from "/assets/icons/contact/whatsapp.svg";
import MailIcon from "/assets/icons/contact/email.svg";

// QR code from public folder
var qrCode = "/assets/images/contact/qr.png";

class ContactSection extends React.Component {
  render() {
    return (
      <div className="contact-section" id="contact">
        <h2 className="contact-title">Have More Questions? Contact Us</h2>
        <div className="contact-content">
          {/* Left side contact details */}
          <div className="contact-info">
            <div className="contact-item">
              <img src={PhoneIcon} alt="Phone" className="contact-icon" />
              <span>+880 1790-269893</span>
            </div>
            <div className="contact-item">
              <img src={WhatsappIcon} alt="WhatsApp" className="contact-icon" />
              <span>+880 1401-110508</span>
            </div>
            <div className="contact-item">
              <img src={MailIcon} alt="Email" className="contact-icon" />
              <span>corporate@chaldal.com</span>
            </div>
          </div>

          {/* Right side QR Code */}
          <div className="contact-qr">
            <img src={qrCode} alt="QR Code" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
