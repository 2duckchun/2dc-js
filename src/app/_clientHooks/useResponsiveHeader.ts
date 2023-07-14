import { MutableRefObject, useEffect, useRef } from "react";

export default function useResponsiveHeader(
  headerCollapingHandler: (flag: Event | boolean) => void
) {
  const prevScrollY = useRef(0);
  const navBarRef: MutableRefObject<HTMLElement | null> = useRef(null);
  const collapseRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const stickyHeader = () => {
      let currentScrollY = window.scrollY;
      if (!navBarRef.current || !collapseRef.current) return;

      if (prevScrollY.current > currentScrollY) {
        navBarRef.current.style.top = "0";
      } else {
        navBarRef.current.style.top = "-60px";
        headerCollapingHandler(false);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", stickyHeader);

    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  return [navBarRef, collapseRef];
}
