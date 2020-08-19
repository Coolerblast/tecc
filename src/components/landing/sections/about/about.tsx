import React from 'react';

import styles from './about.module.scss';

const About = () => {
  return (
    <div className="py-32 w-3/4 mx-auto">
      <section id="about">
        <p className="text-2xl text-gray-800 p-8 leading-relaxed">
          TECC is a <strong>one week</strong> long case competition with a final
          online presentation in the presence of industry professionals. The
          teams will have to perform the following tasks:
        </p>
        <ol className="list-disc pl-10">
          <li>Ethical Analysis</li>
          <li>Technological Analysis</li>
          <li>Sociopolitical Decision-Making</li>
          Students will work in a dynamic environment in which they will get
          first-hand experience on policy-making and cost-benefit analysis.
        </ol>
      </section>
    </div>
  );
};

export default About;
