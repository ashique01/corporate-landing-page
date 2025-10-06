import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Service from './sections/Service';
import './styles.less';
import WhyChooseChaldalCorporate from './sections/WhyChooseChaldalCorporate';
import Testimonial from './sections/Testimonial';
import ProcessSection from './sections/ProcessSection';
import OrderForm from './sections/OrderForm';
import ContactSection from './sections/ContactSection';
import FaqSection from './sections/FaqSection';
import Footer from './sections/Footer';
import ClientsSection from './sections/ClientsSection';
import OrderModal from './components/OrderModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrderModalOpen: false,
    };
  }

  handleOrderClick = () => {
    this.setState({ isOrderModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isOrderModalOpen: false });
  };

  render() {
    return (
      <>
        <Navbar />
        <Hero onOrderClick={this.handleOrderClick} />
        <Service />
        <WhyChooseChaldalCorporate />
        <ClientsSection />
        <Testimonial />
        <ProcessSection />
        <OrderForm />
        <ContactSection />
        <FaqSection />
        <Footer />
        <OrderModal
          show={this.state.isOrderModalOpen}
          onClose={this.handleCloseModal}
        />
      </>
    );
  }
}

export default App;
