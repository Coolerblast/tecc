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
  aspectRatio?: number;
  speed?: number;
  children?: ReactNode;
  className?: string;
};

const ParallaxImage: React.FC<Props> = (props) => {
  const elemRef = useRef(null);
  let initialOffset;
  const [imageHeight, setImageHeight] = useState(0);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setImageHeight(elemRef.current.offsetWidth * props.aspectRatio);
    initialOffset =
      (elemRef.current.getBoundingClientRect().top +
        window.scrollY -
        elemRef.current.offsetHeight -
        offset) *
      props.speed;
    setOffset(initialOffset);
  }, []);

  useWindowEvent(
    'scroll',
    useCallback((e: Event) => {
      setOffset(initialOffset - window.scrollY * props.speed);
      console.log(initialOffset);
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
          transform: `translateY(${offset}px)`,
          height: imageHeight,
          backgroundColor: props.color,
          backgroundImage: `url(${props.url}`,
        }}
      ></div>
      <div className="absolute w-full">{props.children}</div>
    </div>
  );
};

ParallaxImage.defaultProps = {
  aspectRatio: 1,
  speed: 0.2,
  className: '',
};

export default ParallaxImage;
