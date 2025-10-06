import React from "react";
import "../less/faqSection.less";

// Import single arrow down icon
import ChevronDown from "/assets/icons/faq/arrow-drop-down-48px.svg";

class FaqSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openIndex: 1 }; // second item open by default
    this.toggle = this.toggle.bind(this);
  }

  toggle(index) {
    this.setState((prev) => ({
      openIndex: prev.openIndex === index ? -1 : index,
    }));
  }

  renderAnswer(answerText) {
    const paragraphs = answerText.split('\n');
    const elements = [];
    let currentList = null;

    paragraphs.forEach((p, i) => {
      if (p.startsWith('●')) {
        if (!currentList) {
          currentList = [];
          elements.push(<ul key={`ul-${i}`} className="faq-answer-list">{currentList}</ul>);
        }
        currentList.push(<li key={`li-${i}`} className="faq-answer-list-item">{p.substring(1).trim()}</li>);
      } else {
        currentList = null;
        if (p.trim() !== '') {
          elements.push(<p key={`p-${i}`} className="faq-answer-paragraph">{p.trim()}</p>);
        }
      }
    });

    return elements;
  }

  render() {
    var faqs = [
      {
        q: "Why should I use Chaldal Corporate?",
        a: "Chaldal Corporate is more than just a delivery service—it is your business supply partner.\n● You save valuable time by letting us handle bulk purchasing and deliveries.\n● You get bulk discounts that reduce costs significantly.\n● You enjoy flexible delivery slots, making it easier to plan your operations.\n● You have a dedicated Corporate Agent who acts like your personal assistant, always ready to manage your orders, track deliveries, and provide quick support.\n● You receive regular feedback and updates, ensuring a transparent and smooth experience.\n● For offices and event management, Chaldal Corporate is the complete solution—everything you need, in one place.",
      },
      {
        q: "What is Chaldal Corporate?",
        a: "Chaldal Corporate is a dedicated service for businesses, offices, restaurants, and event organizers who require uninterrupted and reliable supply of essential goods in bulk. From groceries and daily office essentials to event-specific needs, we ensure smooth and timely delivery of everything your business requires.\n\nUnlike regular shopping, Corporate customers get customized solutions, flexible delivery times, exclusive discounts, transparent agreements, and a dedicated support team to assist them at every step. It is not just a supply service—it is a long-term partnership that helps businesses save time, reduce costs, and stay worry-free.",
      },
      {
        q: "How do I sign up for Corporate Services?",
        a: "Signing up for Chaldal Corporate is simple and quick. You can:\n1. Fill out the registration form on our Corporate page by sharing your contact details and business requirements.\n2. Call our Corporate Team directly at +8801401110508 to discuss your needs.\n3. A Corporate Agent will then contact you to understand your requirements, prepare customized quotations, and guide you through the onboarding process.\n\nOnce registered, you will have a dedicated Corporate Agent working as your assistant, managing your orders, deliveries, and documentation smoothly.",
      },
      {
        q: "What are the costs associated with Corporate Services?",
        a: "There are no hidden charges for joining Chaldal Corporate. The cost you pay is directly for the products and services you order.\n\nHowever, as a Corporate client, you enjoy special discounts, bulk pricing advantages, customized quotations, and exclusive promotions, which makes the service more cost-efficient than regular shopping.",
      },
      {
        q: "What are the eligibility requirements for Corporate Services?",
        a: "Chaldal Corporate is open to:\n● Corporate offices\n● Restaurants, cafés, and catering services\n● Educational institutions\n● Hospitals and clinics\n● Event management companies\n● Any business or organization that needs bulk supplies on a regular basis\n\nIf you fall under these categories, you are eligible to sign up for Corporate Services and enjoy our special benefits.",
      },
      {
        q: "What areas does Chaldal Corporate serve?",
        a: "Chaldal Corporate is available in all active Chaldal delivery areas, including Dhaka, Jashore, and Chattogram. We are continuously working to expand our coverage so more businesses across Bangladesh can benefit from our service.",
      },
      {
        q: "What are the Corporate delivery hours?",
        a: "We deliver 7 days a week, from 8 AM to 11 PM.\nCorporate customers can select time slots that best suit their business schedules. This flexibility ensures smooth operations for offices, restaurants, and events without any interruptions.",
      },
      {
        q: "What is Bulk Selling in Corporate?",
        a: "Bulk Selling is a special corporate feature where you can purchase large quantities of products at the highest discounts. It is designed to give maximum value for businesses, offices, restaurants, and event organizers who need supplies on a large scale.\n\nWith Bulk Selling, you get:\n● Exclusive discounts on bulk orders\n● Easy and hassle-free delivery, no matter the size of your order\n● Customized quotations based on your requirements\n● Dedicated support to handle logistics and ensure on-time delivery\n\nIn short, Bulk Selling means saving more while getting everything you need for your business, in one place.",
      },
      {
        q: "How does payment work for Corporate Services?",
        a: "We provide flexible payment options to match your business needs:\n● Advance Payment (Cheque, Bank Transfer, Online Payment)\n● Cash on Delivery (COD)\n● Online Payment after placing the order\n\nAll transactions are documented with Supply Agreements, MOUs, and detailed checklists, ensuring full transparency and trust.",
      },
      {
        q: "What if I face issues with my order or I am not satisfied with the service?",
        a: "Our Corporate Support Team is always ready to assist you. If you face any issue—whether it’s a delivery delay, missing items, or any dissatisfaction—your dedicated Corporate Agent will handle it immediately.\n\nWe believe in building long-term partnerships, so we take customer feedback seriously. Our Corporate Team also provides regular follow-ups and feedback sessions to ensure your experience keeps improving.",
      },
    ];

    return (
      <section className="faq-section" id="faq">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-panel">
          {faqs.map((item, idx) => {
            var isOpen = this.state.openIndex === idx;
            return (
              <div className={"faq-item" + (isOpen ? " open" : "")} key={idx}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => this.toggle(idx)}
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <img
                    src={ChevronDown}
                    alt="Toggle"
                    className={"faq-icon" + (isOpen ? " rotate" : "")}
                  />
                </button>

                <div className={"faq-answer" + (isOpen ? " show" : "")}>
                  {this.renderAnswer(item.a)}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default FaqSection;
