import s from './ImageCard.module.css';
import { ImageCardProps } from '../../services/types';

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <div className={s.imgContainer}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
