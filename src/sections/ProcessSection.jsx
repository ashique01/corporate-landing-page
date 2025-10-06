import React from "react";
import "../less/processSection.less";

class ProcessSection extends React.Component {
  render() {
    var steps = [
      {
        number: "1",
        title: "Sign Up",
        description: "Create a corporate account",
      },
      {
        number: "2",
        title: "Place Order",
        description: "Choose products & confirm delivery slot",
      },
      {
        number: "3",
        title: "Get Delivery",
        description: "Receive your supplies on time, every time",
      },
    ];

    return (
      <div className="process-section">
        <h2 className="process-title">Our Process</h2>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={index}>
              <div className="process-number">{step.number}</div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProcessSection;
