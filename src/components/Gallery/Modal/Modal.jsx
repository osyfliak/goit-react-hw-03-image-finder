import { Overlay, OverlayContent } from './Modal.styled';
// import PropTypes from 'prop-types';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEscape);
  }
  handleKeyEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay className="overlay" onClick={this.handleBackdropClick}>
        <OverlayContent className="modal">
          <img src={this.props.modalImg} alt="12" />
        </OverlayContent>
      </Overlay>
    );
  }
}

// Modal.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   modalImg: PropTypes.string.isRequired,
// };
export default Modal;
