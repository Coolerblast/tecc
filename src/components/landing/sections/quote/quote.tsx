import React from 'react';

import styles from './quote.module.scss';

const Quote = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div></div>
        <div>
          <p>
            <strong>Technology is rapidly changing our lives</strong>, and the
            laws surrounding them aren’t keeping up. Businesses are therefore
            faced with decisions between profit and morals. Come to{' '}
            <strong>TECC</strong> to stun industry professionals with your
            scholarship, enhance your decision-making skills, and participate in
            an unique opportunity to share ideas with peers who have diverse
            backgrounds and perspectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
