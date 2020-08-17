import { NavBar } from './navbar';
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
      <ParallaxImage url={'https://picsum.photos/2000/2000'} height="100vh">
        <div className="flex flex-col h-full">
          <NavBar links={links} />
          <div className="flex-grow flex flex-col items-center justify-center mb-40">
            <p className="text-2xl font-bold tracking-wider uppercase text-white">
              Welcome to the
            </p>
            <h1 className="text-6xl text-center text-white font-black">
              TJ Ethics Case Competition
            </h1>
          </div>
          <div className={`${styles.bounce} mx-auto mb-12`}>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </ParallaxImage>
      <div className="w-2/3 mx-auto">
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
          <h1 className="text-6xl text-center font-black">FAQ</h1>
          <div className={styles['questions-wrapper']}>
            {data.map((data, i) => (
              <Card collapsable={true} header={data.question} key={i}>
                {data.answer}
              </Card>
            ))}
          </div>
        </section>
      </div>
      {/* <div className="flex h-screen justify-center items-center">
        <Timeline data={timeline} />
      </div> */}
      <div className="flex h-screen justify-center items-center">
        <div>
          {[...Array(9)].map((_, i) => (
            <div className={`w-48 h-24 bg-primary-${i + 1}00`}></div>
          ))}
        </div>
        <div>
          {[...Array(9)].map((_, i) => (
            <div className={`w-48 h-24 bg-secondary-${i + 1}00`}></div>
          ))}
        </div>
        <div>
          {[...Array(9)].map((_, i) => (
            <div className={`w-48 h-24 bg-accent-${i + 1}00`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
