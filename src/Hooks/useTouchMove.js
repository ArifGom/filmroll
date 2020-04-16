import { useEffect, useState } from 'react';
import throttle from 'Utils/throttle';

const useTouchMove = callback => {
  const [node, setRef] = useState(null);
  useEffect(() => {
    if (node) {
      const container = node;
      const onTouchMove = throttle(e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        callback(e);
      }, 50);
      container.addEventListener('touchmove', onTouchMove, { passive: false });
      return () => {
        container.removeEventListener('touchmove', onTouchMove, {
          passive: false,
        });
      };
    }
  }, [callback, node]);
  return [node, setRef];
};

export default useTouchMove;
