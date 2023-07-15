"use client";

import { useState } from "react";
import setThemeCookie from "@/app/_utils/setThemeInCookie";
import styles from "./Header.module.scss";
import IconMoon from "#/icon-moon.svg";
import IconSun from "#/icon-sun.svg";
import cookieParser from "@/app/_utils/cookieParser";
import NavMenu from "./NavMenu";
import NavToggleButton from "./NavToggleButton";
import useResponsiveHeader from "@/app/_clientHooks/useResponsiveHeader";
import CustomLink from "../_common/CustomLink";
import NavContainer from "./NavContainer";
import UserAuthContainer from "./UserAuthContainer";
import CustomButton from "../_common/CustomButton";

export default function Header({ currentTheme }: { currentTheme: string }) {
  const [theme, setTheme] = useState(currentTheme);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const ThemeIcon = theme === "dark" ? IconMoon : IconSun;

  const headerCollapingHandler = (flag: Event | boolean) => {
    if (!flag) {
      setIsCollapsed(false);
      return;
    }
    setIsCollapsed(!isCollapsed);
  };

  const [headerRef] = useResponsiveHeader(headerCollapingHandler);

  const changeTheme = () => {
    const currentTheme = cookieParser("theme");
    const nextTheme = setThemeCookie(currentTheme);
    setTheme(() => nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.header_content}>
        <CustomLink href={{ pathname: "/" }}>
          <p className={styles.logo_text}>2DC</p>
        </CustomLink>
        <NavContainer isCollapsed={isCollapsed}>
          <NavMenu />
          <UserAuthContainer />
          <CustomButton
            propStyle={styles.theme_toggle}
            onClickHandler={changeTheme}
          >
            <ThemeIcon />
          </CustomButton>
        </NavContainer>
      </div>
      <NavToggleButton navToggleHandler={headerCollapingHandler} />
    </header>
  );
}
