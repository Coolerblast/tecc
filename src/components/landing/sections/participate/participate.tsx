import React from 'react';
import data from 'src/data/participate';

import styles from './participate.module.scss';

const Participate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Why Participate?</h1>
        </div>
        <div className={styles.content}>
          {data.map((data) => (
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Participate;
