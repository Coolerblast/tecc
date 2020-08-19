import React from 'react';

import styles from './objective.module.scss';

const Objective = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold tracking-widest text-center text-gray-800 pb-4">
        Our Mission
      </h1>
      <p className="text-2xl text-gray-800 p-8 leading-relaxed">
        TECC has <strong>four</strong> main objectives:
      </p>
      <ol className="list-decimal pl-10">
        <li>
          To provide a forum where middle and high schoolers can experience{' '}
          <strong>real world business problems</strong>
          through case preparations and learn from the diverse perspectives of
          competitors.
        </li>
        <li>
          To encourage <strong>meaningful relationships</strong> between
          students and faculty of schools around the country.
        </li>
        <li>
          To provide an opportunity for industry to witness the
          <strong>future leaders</strong>.
        </li>
        <li>
          To encourage more students to <strong>diversify</strong> their skills,
          and allow our future leaders to discover potential paths to follow.
        </li>
      </ol>
    </div>
  );
};

export default Objective;
