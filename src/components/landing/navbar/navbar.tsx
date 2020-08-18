import Link from 'next/link';
import styles from './navbar.module.scss';
import { useState } from 'react';

type Props = {
  links: { href: string; label: string }[];
};

const Navbar: React.FC<Props> = (props) => {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <nav className={styles.navbar}>
      <div>
        <div className={styles['brand-wrapper']}>
          <Link href="/">
            <a className={styles.brand}>tecc</a>
          </Link>
          <div className={styles.button} onClick={() => setCollapsed(!isCollapsed)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={`${styles['links-wrapper']} ${
            isCollapsed ? styles.collapse : ''
          }`.trim()}
        >
          <ul className={styles.links}>
            {props.links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
