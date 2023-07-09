import { MutableRefObject, useEffect, useRef } from "react";

export default function useResponsiveHeader(
  navbarRef: MutableRefObject<HTMLElement | null>,
  collapseRef: MutableRefObject<HTMLDivElement | null>
) {
  const prevScrollY = useRef(0);
  useEffect(() => {
    const stickyHeader = () => {
      let currentScrollY = window.scrollY;
      if (navbarRef.current && collapseRef.current) {
        if (prevScrollY.current > currentScrollY) {
          navbarRef.current.style.top = "0";
        } else {
          navbarRef.current.style.top = "-60px";
          collapseRef.current.classList.remove("active");
        }
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);
}
