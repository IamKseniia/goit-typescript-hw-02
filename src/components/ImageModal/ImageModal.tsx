import Modal from 'react-modal';
import { ImageModalProps } from '../../services/types';

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Modal opened">
      <div>
        <img onClick={onClose} src={image ?? ''} alt="Modal content" />
      </div>
    </Modal>
  );
};

export default ImageModal;
