import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ setPage }) => {
  return (
    <button className={s.moreBtn} onClick={() => setPage(prev => prev + 1)}>
      Show more images
    </button>
  );
};

export default LoadMoreBtn;
