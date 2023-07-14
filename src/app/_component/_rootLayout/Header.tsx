"use client";

import { useState } from "react";
import { font_pretended } from "@/fonts/fonts";
import setThemeCookie from "@/app/_utils/setThemeInCookie";
import style from "./Header.module.scss";
import IconMoon from "#/icon-moon.svg";
import IconSun from "#/icon-sun.svg";
import cookieParser from "@/app/_utils/cookieParser";
import NavMenu from "./NavMenu";
import NavToggleButton from "./NavToggleButton";
import useResponsiveHeader from "@/app/_clientHooks/useResponsiveHeader";

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

  const [navBarRef, collapseRef] = useResponsiveHeader(headerCollapingHandler);

  const changeTheme = () => {
    const currentTheme = cookieParser("theme");
    const nextTheme = setThemeCookie(currentTheme);
    setTheme(() => nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className={style.header} ref={navBarRef}>
      <div className={`${style.header_content} header_content`}>
        <p className={style.logo_text}>2DC</p>
        <nav
          className={`${style.nav_collapse} ${font_pretended.className} ${
            isCollapsed ? style.active : ""
          }`}
          ref={collapseRef}
        >
          <NavMenu />
          <div className={`${style.nav_user}`}>
            <button>로그인</button>
            <button>회원가입</button>
            <button
              className={`${style.button_theme} ${style.come}`}
              onClick={changeTheme}
              key={theme}
            >
              <ThemeIcon />
            </button>
          </div>
        </nav>
      </div>
      <NavToggleButton navToggleHandler={headerCollapingHandler} />
    </header>
  );
}
