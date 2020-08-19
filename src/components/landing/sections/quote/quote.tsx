import React from 'react';

import styles from './quote.module.scss';

const Quote = () => {
  return (
    <div>
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 p-8 leading-relaxed">
        <strong>Technology is rapidly changing our lives</strong>, and the laws
        surrounding them aren’t keeping up. Businesses are therefore faced with
        decisions between profit and morals. Come to <strong>TECC</strong> to
        stun industry professionals with your scholarship, enhance your
        decision-making skills, and participate in an unique opportunity to
        share ideas with peers who have diverse backgrounds and perspectives.
      </p>
    </div>
  );
};

export default Quote;
