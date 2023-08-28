import React from 'react';

import { font_pretended } from '@/fonts/fonts';

import styles from './NavContainer.module.scss';

export default function MainNav({
  children,
  isCollapsed,
}: {
  children: React.ReactNode;
  isCollapsed: boolean;
}) {
  return (
    <nav
      className={`${styles.nav_collapse} ${font_pretended.className} ${
        isCollapsed ? styles.active : ''
      }`}
    >
      {children}
    </nav>
  );
}
