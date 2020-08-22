import React, {
  ReactNode,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useWindowEvent } from 'src/hooks/useWindowEvent';
import styles from './parallax.module.scss';

type Props = {
  color?: string;
  url: string;
  width?: string;
  height?: string;
  imageHeight: string;
  speed?: number;
  duration?: string;
  easing?: string;
  children?: ReactNode;
  className?: string;
};

const ParallaxImage: React.FC<Props> = (props) => {
  const elemRef = useRef(null);
  const [initialOffset, setInitialOffset] = useState(0);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setInitialOffset(
      (elemRef.current.getBoundingClientRect().top +
        window.scrollY -
        elemRef.current.offsetHeight -
        offset) *
        props.speed
    );
    setOffset(initialOffset);
  }, []);

  useWindowEvent(
    'scroll',
    useCallback((e: Event) => {
      setOffset(initialOffset - window.scrollY * props.speed);
    }, [])
  );

  return (
    <div
      className={`${styles.container} ${props.className}`.trim()}
      style={{
        width: props.width,
        height: props.height,
      }}
      ref={elemRef}
    >
      <div
        className={styles.parallax}
        style={{
          transform: `translate3d(0px, ${offset}px, 0px)`,
          transition: `transform ${props.duration} ${props.easing}`,
          height: props.imageHeight,
          backgroundColor: props.color,
          backgroundImage: `url(${props.url}`,
        }}
      ></div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

ParallaxImage.defaultProps = {
  speed: 0.2,
  className: '',
  duration: '2000ms',
  easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
};

export default ParallaxImage;
