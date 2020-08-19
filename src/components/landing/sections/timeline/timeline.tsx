import React, { ReactSVG } from 'react';
import data from 'src/data/timeline';
import styles from './timeline.module.scss';

type dataType = {
  title: string;
  date: string;
  description?: string;
};

const Timeline = () => {
  return (
    <>
      <h1 className="text-5xl font-semibold tracking-widest text-gray-800 pb-10">
        Timeline
      </h1>
      <div className={styles.container}>
        {(data as dataType[]).map((data, i) => (
          <div className={styles.item} key={i}>
            <p className={styles.info}>{data.date}</p>
            <div className={styles.marker}></div>
            <div className={styles.content}>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
