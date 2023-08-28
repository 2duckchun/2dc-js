import CustomLink from '@/components/_common/CustomLink';

import styles from './NavMenu.module.scss';

export default function NavMenu() {
  return (
    <ul className={styles.nav_menu}>
      <CustomLink href={{ pathname: '/curriculum/js' }}>
        <li>자바스크립트</li>
      </CustomLink>
      <CustomLink href={{ pathname: '/curriculum/data-structure' }}>
        <li>자료구조</li>
      </CustomLink>
      <li>REPO</li>
      <li>코멘트</li>
    </ul>
  );
}
