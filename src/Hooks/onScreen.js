import { useState, useEffect } from 'react';

function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        setIntersecting(entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(callback);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export default useOnScreen;
