"use client";
// util or elemental
import styles from "./Header.module.scss";
import { useState } from "react";
import setThemeCookie from "@/utils/setThemeInCookie";
import cookieParser from "@/utils/cookieParser";
import useResponsiveHeader from "@/hooks/client/useResponsiveHeader";

// components
import NavMenu from "./NavMenu";
import NavToggleButton from "./NavToggleButton";
import NavContainer from "./NavContainer";
import UserAuthContainer from "./UserAuthContainer";
import CustomButton from "../_common/CustomButton";
import CustomLink from "../_common/CustomLink";

// icons
import { IconMoon, IconSun } from "#/images/svgs";

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
