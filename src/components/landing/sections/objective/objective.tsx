import React from 'react';

import styles from './objective.module.scss';

const Objective = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h1>Our Mission</h1>
          {/* <h2>
            TECC has <strong>four</strong> main objectives:
          </h2> */}
          <div>
            <p>
              Provide a forum where middle and high schoolers can experience{' '}
              <strong>real world business problems </strong>
              through case preparations and learn from the diverse perspectives
              of competitors.
            </p>
          </div>
          <div>
            <p>
              Encourage <strong>meaningful relationships</strong> between
              students and faculty of schools around the country.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <p>
              Provide an opportunity for industry to witness the
              <strong> future leaders</strong>.
            </p>
          </div>
          <div>
            <p>
              Encourage more students to <strong>diversify</strong> their
              skills, and allow our future leaders to discover potential paths
              to follow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
