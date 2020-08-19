import React from 'react';

import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <h1>
        TECC is a <strong>one week</strong> long case competition with a final
        online presentation in the presence of industry professionals. The teams
        will have to perform the following tasks:
      </h1>
      <div>
        <ol>
          <li>
            <p>Ethical Analysis</p>
          </li>
          <li>
            <p>Technological Analysis</p>
          </li>
          <li>
            <p>Sociopolitical Decision-Making</p>
          </li>
        </ol>
        <h2>
          Students will work in a dynamic environment in which they will get
          first-hand experience on policy-making and cost-benefit analysis.
        </h2>
      </div>
    </div>
  );
};

export default About;
