import React from "react";
import "../less/testimonial.less";

// Import images
import Customer1 from "/assets/images/testimonial/Tazul Islam.jpg";
import Customer2 from "/assets/images/testimonial/Jui Shaha.jpg";
import Customer3 from "/assets/images/testimonial/Md. Ismail Hosen.jpg";
import Customer4 from "/assets/images/testimonial/Md. Ariful Islam.jpg";


// Import arrow icons
import ArrowLeft from "/assets/icons/testimonial/chevron-left.svg";
import ArrowRight from "/assets/icons/testimonial/chevron-right.svg";

class Testimonial extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0, isAnimating: false };
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  testimonials = [
    {
      image: Customer1,
      name: "Tazul Islam",
      title: "Senior Manager - Finance, Intertek Bangladesh",
      quote:
        "I have been using Chaldal Corporate Service for a long time. We source all our office groceries and stationery from Chaldal. Their service is completely hassle-free, and we always receive deliveries on time. This makes our daily office operations much easier. I truly appreciate the Chaldal Corporate team.",
    },
    {
      image: Customer2,
      name: "Jui Shaha",
      title: "Senior Officer, HR & Admin, Mir Group",
      quote:
        "I am very satisfied with all the services of Chaldal. I regularly order premium fish for my office employees, and I always receive quality products with timely service. What I like most is that whenever any issue arises, the Corporate Team provides an instant solution.",
    },
    {
      image: Customer3,
      name: "Md. Ismail Hosen",
      title:
        "Project Manager - Operation & Business Development, Patrons Venture Ltd.",
      quote:
        "Chaldal Corporate Service has been very helpful for our organization. Their wide product range, flexible delivery, and special discounts make it easy to meet our office needs efficiently. We’re highly satisfied with their reliable service.",
    },
    {
      image: Customer4,
      name: "Md. Ariful Islam",
      title: "Senior Officer, Accounts & Finance, Ideascale Bangladesh Limited",
      quote:
        "We rely on Chaldal Corporate for our monthly groceries, beverages, and stationery needs. Getting everything from one place saves us a lot of time. On top of that, their transparent documentation and convenient bank payment facilities make the process very comfortable for us.",
    },
  ];

  handlePrev() {
    if (this.state.isAnimating) return;
    var newIndex =
      this.state.current === 0
        ? this.testimonials.length - 1
        : this.state.current - 1;
    this.setState({ current: newIndex, isAnimating: true });
    setTimeout(() => this.setState({ isAnimating: false }), 500);
  }

  handleNext() {
    if (this.state.isAnimating) return;
    var newIndex =
      this.state.current === this.testimonials.length - 1
        ? 0
        : this.state.current + 1;
    this.setState({ current: newIndex, isAnimating: true });
    setTimeout(() => this.setState({ isAnimating: false }), 500);
  }

  render() {
    var self = this;

    return (
      <div className="testimonial-section">
        <h2 className="testimonial-title">What Our Customer Have to Say</h2>

        <div className="testimonial-carousel">
          {/* Left arrow */}
          <button className="arrow left" onClick={this.handlePrev} title="Previous testimonial">
            <img src={ArrowLeft} alt="Previous" />
          </button>

          {this.testimonials.map(function (item, index) {
            let className = "testimonial-slide";
            if (index === self.state.current) {
              className += " active";
            } else if (index === (self.state.current - 1 + self.testimonials.length) % self.testimonials.length) {
              className += " prev";
            } else if (index === (self.state.current + 1) % self.testimonials.length) {
              className += " next";
            } else {
              className += " hidden";
            }

            return (
              <div className={className} key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonial-image"
                />
                <h3 className="testimonial-name">{item.name}</h3>
                <p className="testimonial-role">{item.title}</p>
                {index === self.state.current && (
                  <p className="testimonial-quote">“{item.quote}”</p>
                )}
              </div>
            );
          })}

          {/* Right arrow */}
          <button className="arrow right" onClick={this.handleNext} title="Next testimonial">
            <img src={ArrowRight} alt="Next" />
          </button>
        </div>

        <div className="testimonial-dots">
          {this.testimonials.map((_, index) => (
            <span
              key={index}
              className={index === this.state.current ? "dot active" : "dot"}
              onClick={() => self.setState({ current: index })}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonial;