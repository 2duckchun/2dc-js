"use client";

import setThemeCookie from "../_utils/setThemeInCookie";
import style from "./Header.module.scss";
import IconMoon from "../../../public/icon-moon.svg";
import IconSun from "../../../public/icon-sun.svg";
import { useRef, useState } from "react";
import cookieParser from "../_utils/cookieParser";
import NavMenu from "./_component/NavMenu";
import { font_pretended } from "@/fonts/fonts";
import NavToggleButton from "./_component/NavToggleButton";
import useResponsiveHeader from "../_clientHooks/useResponsiveHeader";

export default function Header({ currentTheme }: { currentTheme: string }) {
  const [theme, setTheme] = useState(currentTheme);
  const ThemeIcon = theme === "dark" ? IconMoon : IconSun;
  const navbarRef = useRef<HTMLElement | null>(null);
  const collapseRef = useRef<HTMLDivElement | null>(null);
  useResponsiveHeader(navbarRef, collapseRef);

  const navToggleHandler = () => {
    if (collapseRef.current) {
      collapseRef.current.classList.toggle("active");
    }
  };

  const changeTheme = () => {
    const currentTheme = cookieParser("theme");
    const nextTheme = setThemeCookie(currentTheme);
    setTheme(() => nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className={style.header} ref={navbarRef}>
      <div className={`${style.header_content} header_content`}>
        <p className={style.logo_text}>2DC</p>
        <nav
          className={`${style.nav_collapse} ${font_pretended.className} nav_collapse`}
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
      <NavToggleButton navToggleHandler={navToggleHandler} />
    </header>
  );
}
