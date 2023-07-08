"use client";

import setThemeCookie from "../_utils/setThemeInCookie";
import style from "./Header.module.scss";
import IconMoon from "../../../public/icon-moon.svg";
import IconSun from "../../../public/icon-sun.svg";
import { useEffect, useRef, useState } from "react";
import cookieParser from "../_utils/cookieParser";
import NavMenu from "./_component/NavMenu";
import { font_pretended } from "@/fonts/fonts";

export default function Header({ currentTheme }: { currentTheme: string }) {
  const navbarRef = useRef<HTMLElement | null>(null);
  const prevScrollY = useRef(0);
  const [theme, setTheme] = useState(currentTheme);
  const ThemeIcon = theme === "dark" ? IconMoon : IconSun;

  const changeTheme = () => {
    const currentTheme = cookieParser("theme");
    const nextTheme = setThemeCookie(currentTheme);
    setTheme(() => nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  useEffect(() => {
    const stickyHeader = () => {
      let currentScrollY = window.scrollY;
      if (navbarRef.current) {
        prevScrollY.current > currentScrollY
          ? (navbarRef.current.style.top = "0")
          : (navbarRef.current.style.top = "-60px");
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return (
    <header className={`${style.header}`} ref={navbarRef}>
      <div className={`${style.header_content} header`}>
        <p className={style.logo_text}>2DC</p>
        <nav className={`${style.nav_collapse} ${font_pretended.className}`}>
          <NavMenu />
          <div className={style.nav_user}>
            <button>로그인</button>
            <button>가입</button>
          </div>
        </nav>
        <button
          className={`${style.button_theme} ${style.come}`}
          onClick={changeTheme}
          key={theme}
        >
          <ThemeIcon />
        </button>
      </div>
    </header>
  );
}
