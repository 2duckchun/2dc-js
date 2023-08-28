import { MutableRefObject, useEffect, useRef } from 'react';

type HandlerProps = (flag: Event | boolean) => void;

export default function useResponsiveHeader(headerCollapingHandler: HandlerProps) {
  const prevScrollY = useRef(0);
  const headerRef: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    const stickyHeader = () => {
      let currentScrollY = window.scrollY;
      if (!headerRef.current) return;

      if (prevScrollY.current > currentScrollY) {
        headerRef.current.style.top = '0';
      } else {
        headerRef.current.style.top = '-60px';
        headerCollapingHandler(false);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', stickyHeader);

    return () => window.removeEventListener('scroll', stickyHeader);
  }, []);

  return [headerRef];
}
