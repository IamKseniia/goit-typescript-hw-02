import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Modal opened">
      <div>
        <img onClick={onClose} src={image} />
      </div>
    </Modal>
  );
};

export default ImageModal;
