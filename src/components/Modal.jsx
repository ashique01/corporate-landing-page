import React from "react";
import "../less/modal.less";

class Modal extends React.Component {
  componentDidMount() {
    if (this.props.show) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.show && !prevProps.show) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else if (!this.props.show && prevProps.show) {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }

  componentWillUnmount() {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal-backdrop">
        <div className="modal-content">
          <button className="modal-close" onClick={this.props.onClose}>
            &times;
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;