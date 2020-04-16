import { useEffect } from 'react';

export default (
  callback,
  node,
  active = true,
  stopPropagation = true,
  preventDefault = true
) => {
  const click = event => {
    if (
      active &&
      node &&
      event.target instanceof Node &&
      !node.contains(event.target)
    ) {
      stopPropagation && event.stopPropagation();
      preventDefault && event.preventDefault();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', click, { passive: false });
    document.addEventListener('touchstart', click, { passive: false });

    return () => {
      document.removeEventListener('click', click, { passive: false });
      document.removeEventListener('touchstart', click, { passive: false });
    };
  });
};
