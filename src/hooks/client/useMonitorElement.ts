import { useEffect, useRef } from 'react';

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

export default function useMonitorElement(callback: () => void) {
  const monitoredElement = useRef(null);
  useEffect(() => {
    if (!monitoredElement.current) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          callback();
        }
      });
    }, options);
    observer.observe(monitoredElement.current);

    return () => observer.disconnect();
  }, [callback]);

  return monitoredElement;
}
