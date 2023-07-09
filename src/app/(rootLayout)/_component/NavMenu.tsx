import style from "./NavMenu.module.scss";

export default function NavMenu() {
  return (
    <ul className={`${style.nav_menu} nev_menu`}>
      <li>자바스크립트</li>
      <li>자료구조</li>
      <li>REPO</li>
      <li>코멘트</li>
    </ul>
  );
}
