import styles from "./NavContainer.module.scss";
import { font_pretended } from "@/fonts/fonts";

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
        isCollapsed ? styles.active : ""
      }`}
    >
      {children}
    </nav>
  );
}
