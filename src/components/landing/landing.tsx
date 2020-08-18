import { Navbar } from './navbar';
import { ParallaxImage } from '../shared/parallax-image';
import { Card } from '../shared/card';
import { Timeline } from './timeline';
import data from '../../data/faq';
import timeline from '../../data/timeline';

import styles from './landing.module.scss';

import React from 'react';

const links = [
  { href: '#about', label: 'about' },
  { href: '#faq', label: 'faq' },
  { href: '#contact', label: 'contact' },
];

const Landing = () => {
  return (
    <div>
      <ParallaxImage
        url={'https://picsum.photos/2000/2000'}
        color="black"
        height="100vh"
        imageHeight="150vh"
      >
        <div className="flex flex-col h-full">
          <Navbar links={links} />
          <div className={styles['welcome-header']}>
            <p>Welcome to the</p>
            <h1>TJ Ethics Case Competition</h1>
          </div>
          <div className={`${styles.bounce} mx-auto mb-20`}>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </ParallaxImage>
      <div className="w-11/12 mx-auto">
        <div className="py-32 w-3/4 mx-auto">
          <p className="text-3xl text-gray-800 p-8 leading-relaxed">
            <strong>Technology is rapidly changing our lives</strong>, yet the
            laws surrounding them aren’t keeping up. Businesses are therefore
            faced with decisions over the questions of profit and morals. Come
            to <strong>TECC</strong> to stun industry professionals with your
            scholarship, enhance your decision-making skills, and participate in
            an unique opportunity to share ideas with peers who have diverse
            backgrounds and perspectives.
          </p>
        </div>
        <section id="faq">
          <h1 className="text-6xl text-center font-black pb-8">FAQ</h1>
          <div className={styles['questions-wrapper']}>
            {data.map((data, i) => (
              <Card collapsable={true} header={data.question} key={i}>
                {data.answer}
              </Card>
            ))}
          </div>
          <div className="py-16 flex flex-col items-center">
            <h1 className="text-5xl font-semibold tracking-widest text-gray-800 pb-10">
              TIMELINE
            </h1>
            <Timeline data={timeline} />
          </div>
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
    </div>
  );
};

export default Landing;
