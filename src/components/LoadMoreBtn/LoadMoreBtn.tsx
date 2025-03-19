import s from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../../services/types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  return (
    <button className={s.moreBtn} onClick={() => setPage(prev => prev + 1)}>
      Show more images
    </button>
  );
};

export default LoadMoreBtn;
