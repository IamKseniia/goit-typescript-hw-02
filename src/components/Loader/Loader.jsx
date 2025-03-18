import s from './Loader.module.css';
import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className={s.loader}>
      <DotLoader>
        <p>Loading data, please wait...</p>
      </DotLoader>
    </div>
  );
};

export default Loader;
