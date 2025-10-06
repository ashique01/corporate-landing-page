import React from "react";
import "../less/serviceSection.less";
import B2BIcon from "/assets/icons/service/b2b.svg";
import BulkIcon from "/assets/icons/service/bulk.svg";
import DeliveryIcon from "/assets/icons/service/delivery.svg";
import DiscountIcon from "/assets/icons/service/discount.svg";
import BillingIcon from "/assets/icons/service/billing.svg";

class Service extends React.Component {
  render() {
    var services = [
      {
        icon: B2BIcon,
        title: "B2B Sales",
        description:
          "Dedicated account managers to assist with your orders and ensure a smooth experience",
      },
      {
        icon: BulkIcon,
        title: "Bulk Sales",
        description:
          "High-volume deliveries with the highest possible discounts on 18,000+ products",
      },
      {
        icon: DeliveryIcon,
        title: "Flexible Delivery",
        description:
          "Enjoy delivery from 8 AM to 11 PM, with the ability to choose specific time slots that work best for you",
      },
      {
        icon: DiscountIcon,
        title: "Exclusive Discounts",
        description:
          "Benefit from special corporate discounts, extra benefits for advance payments, and customized quotations",
      },
      {
        icon: BillingIcon,
        title: "Transparent Billing",
        description:
          "All orders come with transparent documentation, providing a complete and accurate record of expenses",
      },
    ];

    return (
      <div className="service-section" id="services">
        <div className="service-grid">
          {services.map((service, index) => (
            <div className={`service-card card-${index + 1}`} key={index}>
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Service;