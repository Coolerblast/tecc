import { Navbar } from './components';
import { ParallaxImage, SmoothScroll } from '../shared';
import {
  About,
  FAQ,
  Objective,
  Participate,
  Quote,
  Sponsors,
  Timeline,
} from './sections';

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
        <Quote />
        <About />
        <Objective />
        <Participate />
        <FAQ />
        <Timeline />
        <Sponsors />
        <div className="grid grid-cols-3">
          <div>
            <div className={`h-24 bg-primary-100`}></div>
            <div className={`h-24 bg-primary-200`}></div>
            <div className={`h-24 bg-primary-300`}></div>
            <div className={`h-24 bg-primary-400`}></div>
            <div className={`h-24 bg-primary-500`}></div>
            <div className={`h-24 bg-primary-600`}></div>
            <div className={`h-24 bg-primary-700`}></div>
            <div className={`h-24 bg-primary-800`}></div>
            <div className={`h-24 bg-primary-900`}></div>
          </div>
          <div>
            <div className={`h-24 bg-secondary-100`}></div>
            <div className={`h-24 bg-secondary-200`}></div>
            <div className={`h-24 bg-secondary-300`}></div>
            <div className={`h-24 bg-secondary-400`}></div>
            <div className={`h-24 bg-secondary-500`}></div>
            <div className={`h-24 bg-secondary-600`}></div>
            <div className={`h-24 bg-secondary-700`}></div>
            <div className={`h-24 bg-secondary-800`}></div>
            <div className={`h-24 bg-secondary-900`}></div>
          </div>
          <div>
            <div className={`h-24 bg-accent-100`}></div>
            <div className={`h-24 bg-accent-200`}></div>
            <div className={`h-24 bg-accent-300`}></div>
            <div className={`h-24 bg-accent-400`}></div>
            <div className={`h-24 bg-accent-500`}></div>
            <div className={`h-24 bg-accent-600`}></div>
            <div className={`h-24 bg-accent-700`}></div>
            <div className={`h-24 bg-accent-800`}></div>
            <div className={`h-24 bg-accent-900`}></div>
          </div>
        </div>
      </SmoothScroll>
    </>
  );
};

export default Landing;
