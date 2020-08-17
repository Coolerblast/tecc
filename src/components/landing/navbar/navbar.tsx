import Link from 'next/link';
import styles from './navbar.module.scss';

type Props = {
  links: { href: string; label: string }[];
};

const NavBar: React.FC<Props> = (props) => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <a className={styles.brand}>tecc</a>
          </Link>
        </li>
        <ul className={`${styles.links} space-x-4`}>
          {props.links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;