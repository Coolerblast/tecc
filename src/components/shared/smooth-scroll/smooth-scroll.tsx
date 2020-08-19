import React, { ReactNode, useRef, useCallback, useEffect } from 'react';
import { useWindowEvent } from 'src/hooks/useWindowEvent';

import styles from './smooth.module.scss';

type Props = {
  duration?: string;
  easing?: string;
  children?: ReactNode;
};

const SmoothScroll: React.FC<Props> = (props) => {
  const divRef = useRef();
  const scrollRef = useRef();
  const updateScrollHeight = () => {
    (scrollRef.current as HTMLDivElement).style.height =
      (divRef.current as HTMLDivElement).offsetHeight + 'px';
  };
  useEffect(() => {
    updateScrollHeight();
    let currentPos = window.pageYOffset;
    const update = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.05;
      (divRef.current as HTMLDivElement).style.transform = `translate3d(0px, ${-window.pageYOffset}px, 0px) skewY(${speed}deg)`;
      currentPos = newPos;
      requestAnimationFrame(update);
    };
    const animationId = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  useWindowEvent(
    'resize',
    useCallback(() => updateScrollHeight(), [])
  );
  return (
    <>
      <div className="h-screen overflow-hidden fixed">
        <div
          className={styles.container}
          style={{ transition: `transform ${props.duration} ${props.easing}` }}
          ref={divRef}
        >
          {props.children}
        </div>
      </div>
      <div ref={scrollRef}></div>
    </>
  );
};

SmoothScroll.defaultProps = {
  duration: '1000ms',
  easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
};

export default SmoothScroll;
