import React, { useState, useRef, useEffect, ReactNode, useCallback } from 'react';
import { useWindowEvent } from 'src/hooks/useWindowEvent';
import styles from './card.module.scss';

type Props = {
  header?: string;
  collapsable?: boolean;
  width?: string;
  className?: string;
  children?: ReactNode;
};

const Card: React.FC<Props> = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [initialHeight, setInitialHeight] = useState(0);
  const contentWrapperRef = useRef();

  useEffect(() => {
    setInitialHeight(
      (contentWrapperRef.current as HTMLDivElement).scrollHeight
    );
  }, []);

  useEffect(() => {
    (contentWrapperRef.current as HTMLDivElement).style.height =
      (collapsed ? 0 : initialHeight) + 'px';
  }, [collapsed, initialHeight]);

  useWindowEvent(
    'resize',
    useCallback(() => {
      setInitialHeight(
        (contentWrapperRef.current as HTMLDivElement).scrollHeight
      );
    }, [])
  );

  return (
    <div
      className={`${styles.container} ${props.className}`.trim()}
      style={{ maxWidth: props.width }}
    >
      <div
        className={`${styles['header-wrapper']} ${
          collapsed ? '' : styles.open
        }`.trim()}
        onClick={props.collapsable ? () => setCollapsed(!collapsed) : null}
      >
        <h1>{props.header}</h1>
        {props.collapsable && <div className={styles.indicator}></div>}
      </div>
      <div className={styles['content-wrapper']} ref={contentWrapperRef}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  header: 'Insert text',
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate
      animi vitae libero cumque. Vitae nostrum voluptate itaque. Ducimus
      repudiandae fuga nobis provident delectus, eum aperiam harum doloribus
      perspiciatis nulla!
    </p>
  ),
  className: '',
};

export default Card;
