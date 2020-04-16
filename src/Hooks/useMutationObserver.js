import { useEffect } from 'react';

let config = {
  attributes: true,
  characterData: true,
  subtree: true,
  childList: true,
};

function useMutationObserver(ref, callback, options = config) {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);

      observer.observe(ref.current, options);
      return () => {
        observer.disconnect();
      };
    }
  }, [callback, options, ref]);
}

export default useMutationObserver;
