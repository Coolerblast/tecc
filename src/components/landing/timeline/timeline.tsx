import React, { ReactSVG } from 'react';
import styles from './timeline.module.scss';

type dataType = {
  title: string;
  date: string;
  description?: string;
};

type Props = {
  data: dataType[];
};

const Timeline: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      {props.data.map((data, i) => (
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
  );
};

export default Timeline;
