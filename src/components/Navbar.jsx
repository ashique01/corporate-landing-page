import React from "react";
import "../less/navbar.less";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">
            Chaldal
          </a>
          <div className="menu-icon" onClick={this.toggleMenu}>
            <div className={this.state.isOpen ? "hamburger open" : "hamburger"}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className={this.state.isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#hero" className="nav-links" onClick={this.toggleMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-links" onClick={this.toggleMenu}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#why-chaldal" className="nav-links" onClick={this.toggleMenu}>
                Why Chaldal
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-links" onClick={this.toggleMenu}>
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-links" onClick={this.toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
