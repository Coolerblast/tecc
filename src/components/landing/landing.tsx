import { Navbar } from './components/navbar';
import { ParallaxImage } from '../shared/parallax-image';
import { Card } from '../shared/card';
import { Timeline } from './components/timeline';
import { SmoothScroll } from '../shared/smooth-scroll';
import data from '../../data/faq';
import timeline from '../../data/timeline';

import styles from './landing.module.scss';

import React, { useRef, useEffect } from 'react';

const links = [
  { href: '#about', label: 'about' },
  { href: '#faq', label: 'faq' },
  { href: '#contact', label: 'contact' },
];

const Landing = () => {
  return (
    <>
      <Navbar links={links} />
      <SmoothScroll>
        <ParallaxImage
          url={'https://picsum.photos/2000/2000'}
          color="black"
          height="100vh"
          imageHeight="150vh"
        >
          <div className="flex flex-col h-full">
            <div className={styles['welcome-header']}>
              <p>Welcome to the</p>
              <h1>TJ Ethics Case Competition</h1>
              <p>Registration opens Janurary 22nd, 2021</p>
            </div>
            <div className={`${styles.bounce} mx-auto mb-20`}>
              <div className={styles.arrow}></div>
            </div>
          </div>
        </ParallaxImage>
        <div className="w-11/12 mx-auto">
          <div className="py-32 w-3/4 mx-auto">
            <section id="about">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 p-8 leading-relaxed">
                <strong>Technology is rapidly changing our lives</strong>, and
                the laws surrounding them aren’t keeping up. Businesses are
                therefore faced with decisions between profit and morals. Come
                to <strong>TECC</strong> to stun industry professionals with
                your scholarship, enhance your decision-making skills, and
                participate in an unique opportunity to share ideas with peers
                who have diverse backgrounds and perspectives.
              </p>
              <p className="text-2xl text-gray-800 p-8 leading-relaxed">
                TECC is a <strong>one week</strong> long case competition with a
                final online presentation in the presence of industry
                professionals. The teams will have to perform the following
                tasks:
              </p>
              <ol className="list-disc pl-10">
                <li>Ethical Analysis</li>
                <li>Technological Analysis</li>
                <li>Sociopolitical Decision-Making</li>
                Students will work in a dynamic environment in which they will
                get first-hand experience on policy-making and cost-benefit
                analysis.
              </ol>
              <h1 className="text-5xl font-semibold tracking-widest text-center text-gray-800 pb-4">
                Our Mission
              </h1>
              <p className="text-2xl text-gray-800 p-8 leading-relaxed">
                TECC has <strong>four</strong> main objectives:
              </p>
              <ol className="list-decimal pl-10">
                <li>
                  To provide a forum where middle and high schoolers can
                  experience <strong>real world business problems</strong>
                  through case preparations and learn from the diverse
                  perspectives of competitors.
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
                  To encourage more students to <strong>diversify</strong> their
                  skills, and allow our future leaders to discover potential
                  paths to follow.
                </li>
              </ol>
              <h1 className="text-5xl font-semibold tracking-widest text-center text-gray-800 pb-4">
                Why Participate?
              </h1>
              <div></div>
            </section>
          </div>
          <section id="faq">
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
            <div className="py-16 flex flex-col items-center">
              <h1 className="text-5xl font-semibold tracking-widest text-gray-800 pb-10">
                Timeline
              </h1>
              <Timeline data={timeline} />
            </div>
          </section>
          <section id="sponsors">
            <h1 className="text-5xl font-semibold tracking-widest text-center text-gray-800 pb-8">
              Sponsors
            </h1>
            Jason He!
          </section>
        </div>
        <div className="grid grid-cols-3">
          <div>
            {[...Array(9)].map((_, i) => (
              <div className={`h-24 bg-primary-${i + 1}00`}></div>
            ))}
          </div>
          <div>
            {[...Array(9)].map((_, i) => (
              <div className={`h-24 bg-secondary-${i + 1}00`}></div>
            ))}
          </div>
          <div>
            {[...Array(9)].map((_, i) => (
              <div className={`h-24 bg-accent-${i + 1}00`}></div>
            ))}
          </div>
        </div>
      </SmoothScroll>
    </>
  );
};

export default Landing;
