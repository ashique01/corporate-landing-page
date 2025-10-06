import React from "react";
import "../less/whyChooseChaldal.less";

// Import SVG icons
import PriceIcon from "/assets/icons/why_chaldal/price.svg";
import FreshIcon from "/assets/icons/why_chaldal/vegetable.svg";
import GuaranteeIcon from "/assets/icons/why_chaldal/secure.svg";
import SupportIcon from "/assets/icons/why_chaldal/support.svg";
import DeliveryIcon from "/assets/icons/why_chaldal/truck.svg";

class WhyChooseChaldalCorporate extends React.Component {
  render() {
    var features = [
      {
        icon: FreshIcon,
        title: "Freshly Sourced Products",
        description:
          "Our quality assurance team makes sure that you always get the best from us",
      },
      {
        icon: SupportIcon,
        title: "24 Hour Support",
        description:
          "Dedicated support team always ready over the Phone & Live Chat",
      },
      {
        icon: GuaranteeIcon,
        title: "Original Product Guarantee",
        description:
          "No cutting corners on quality, we source only the original products.",
      },
    ];

    return (
      <div className="why-section" id="why-chaldal">
        <h2 className="why-title">Why Choose Chaldal Corporate?</h2>
        <div className="why-grid">
          {features.map(function (feature, index) {
            return (
              <div className="why-card" key={index}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="why-icon"
                />
                <h3 className="why-card-title">{feature.title}</h3>
                <p className="why-card-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WhyChooseChaldalCorporate;
