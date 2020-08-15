import React, { useState, useRef, useEffect } from 'react';
import styles from './card.module.scss';

type Props = {
  header?: string;
  content?: string;
  collapsable?: boolean;
  width?: string;
  className?: string;
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
  }, [collapsed]);

  return (
    <div
      className={`${styles.container} ${props.className}`.trim()}
      style={{ width: props.width }}
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
        <div className={styles.content}>{props.content}</div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  header: 'Insert text',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate animi vitae libero cumque. Vitae nostrum voluptate itaque. Ducimus repudiandae fuga nobis provident delectus, eum aperiam harum doloribus perspiciatis nulla!',
  width: '20em',
  className: '',
};

export default Card;
