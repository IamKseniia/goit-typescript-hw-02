import React from 'react';
import s from './Loader.module.css';
import { DotLoader } from 'react-spinners';

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <DotLoader />
      <p>Loading data, please wait...</p>
    </div>
  );
};

export default Loader;
