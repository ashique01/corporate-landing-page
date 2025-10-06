import React from "react";
import "../less/orderForm.less";

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: "",
      contactNumber: "",
      contactPerson: "",
      email: "",
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    var errors = {};
    var nameRegex = /^[a-zA-Z\s]{2,}$/;
    var phoneRegex = /^[0-9]{10,15}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.state.businessName.trim()) {
      errors.businessName = "Business name is required";
    } else if (!nameRegex.test(this.state.businessName)) {
      errors.businessName = "Enter a valid business name (at least 2 characters, letters and spaces only)";
    }

    if (!this.state.contactPerson.trim()) {
      errors.contactPerson = "Contact person name is required";
    } else if (!nameRegex.test(this.state.contactPerson)) {
      errors.contactPerson = "Enter a valid name (at least 2 characters, letters and spaces only)";
    }

    if (!this.state.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    } else if (!phoneRegex.test(this.state.contactNumber)) {
      errors.contactNumber = "Enter a valid phone number (10–15 digits)";
    }

    if (!this.state.email.trim()) {
      errors.email = "Email address is required";
    } else if (!emailRegex.test(this.state.email)) {
      errors.email = "Enter a valid email address";
    }

    return errors;
  }

  handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.setState({ errors: this.validate() });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors: errors });
      return;
    }

    alert("Form submitted successfully ✅");
    // TODO: send data to API
  }

  render() {
    var errors = this.state.errors;

    return (
      <div className="order-form-section">
        <h2 className="order-form-title">Ready to place your order?</h2>
        <p className="order-form-subtitle">
          Sign up and place your order today
        </p>

        <form className="order-form" onSubmit={this.handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter Business Name"
                value={this.state.businessName}
                onChange={this.handleChange}
              />
              {errors.businessName && (
                <span className="error" style={{ color: "#dc3545" }}>
                  {errors.businessName}
                </span>
              )}
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                placeholder="Enter Contact Number"
                value={this.state.contactNumber}
                onChange={this.handleChange}
              />
              {errors.contactNumber && (
                <span className="error" style={{ color: "#dc3545" }}>
                  {errors.contactNumber}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Contact Person Name</label>
              <input
                type="text"
                name="contactPerson"
                placeholder="Enter Contact Person Name"
                value={this.state.contactPerson}
                onChange={this.handleChange}
              />
              {errors.contactPerson && (
                <span className="error" style={{ color: "#dc3545" }}>
                  {errors.contactPerson}
                </span>
              )}
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {errors.email && (
                <span className="error" style={{ color: "#dc3545" }}>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={Object.keys(this.state.errors).length > 0}
          >
            Place Your Order
          </button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
