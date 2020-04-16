import { useEffect } from 'react';

const useKey = (target, onKey) => {
  useEffect(() => {
    const keyPressedHandler = ({ key }) => {
      if (key === target) {
        onKey();
      }
    };
    window.addEventListener('keydown', keyPressedHandler);

    return () => {
      window.removeEventListener('keydown', keyPressedHandler);
    };
  }, [onKey, target]);
};
export default useKey;
