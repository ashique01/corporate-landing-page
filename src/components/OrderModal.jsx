import React from "react";
import Modal from "./Modal";
import OrderForm from "../sections/OrderForm";
import "../less/orderForm.less";

class OrderModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onClose={this.props.onClose}>
        <div className="modal-body-scrollable">
          <OrderForm />
        </div>
      </Modal>
    );
  }
}

export default OrderModal;