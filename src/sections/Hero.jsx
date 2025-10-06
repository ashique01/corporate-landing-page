import React from "react";
import "../less/heroSection.less";

class Hero extends React.Component {
  render() {
    var title = "Chaldal Corporate";
    var subtitle =
      "Bulk groceries, office essentials, and more — delivered on time";

    return (
      <section className="hero" id="hero">
        {/* Background Image */}
        <img
          src="/assets/images/hero.png"
          alt="Chaldal Corporate Hero Background"
          className="hero-bg"
          loading="eager"
        />
        
        {/* Gradient Overlay + Content */}
        <div className="hero-overlay">
          <div className="hero-text">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
          </div>
          
          <div className="hero-action">
            <button
              className="btn-primary"
              aria-label="Place Your Order"
              onClick={this.props.onOrderClick}
            >
              Place Your Order
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;