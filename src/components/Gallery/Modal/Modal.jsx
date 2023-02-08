import { Overlay, OverlayContent } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ onClick, modalImg }) => {
  return (
    <Overlay className="overlay" onClick={onClick}>
      <OverlayContent className="modal" onClick={e => e.stopPropagation()}>
        <img src={modalImg} alt="12" />
      </OverlayContent>
    </Overlay>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  modalImg: PropTypes.string.isRequired,
};
export default Modal;
