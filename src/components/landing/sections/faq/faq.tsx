import React from 'react';
import { Card } from 'src/components/shared';
import data from 'src/data/faq';

import styles from './faq.module.scss';

const FAQ = () => {
  return (
    <>
      <h1 className="text-5xl font-semibold tracking-widest text-center text-gray-800 pb-8">
        FAQ
      </h1>
      <div className={styles['questions-wrapper']}>
        {data.map((data, i) => (
          <Card collapsable={true} header={data.question} key={i}>
            {data.answer}
          </Card>
        ))}
      </div>
    </>
  );
};

export default FAQ;
