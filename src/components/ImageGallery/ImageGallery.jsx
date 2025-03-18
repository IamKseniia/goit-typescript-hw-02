import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={s.wrapper}>
      {photos.map(item => (
        <li key={item.id}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
