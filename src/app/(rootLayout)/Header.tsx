"use client";

import setThemeCookie from "../_utils/setThemeCookie";
import style from "./Header.module.scss";
import { useEffect, useRef } from "react";

export default function Header() {
  const prevScrollY = useRef(0);
  const navbarRef = useRef<HTMLElement | null>(null);

  const TestHandle = () => {
    const nextTheme = setThemeCookie();
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
    <header className={style.header} ref={navbarRef}>
      <div className={style.header_content}>
        <p className={style.logo_text}>2DC</p>
        <button className={style.button_theme} onClick={() => TestHandle()}>
          클릭
        </button>
      </div>
    </header>
  );
}
