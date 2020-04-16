import { useState, useEffect, useCallback } from 'react';
import useMutationObserver from './useMutationObserver';

function useBoundingRect(ref) {
  const getBoundingClientRect = useCallback(() => {
    if (ref.current) {
      return ref.current.getBoundingClientRect();
    }
    return null;
  }, [ref]);

  const [value, setValue] = useState(null);

  const update = useCallback(() => {
    setValue(getBoundingClientRect());
  }, [getBoundingClientRect]);

  useEffect(() => {
    update();
  }, [update]);

  useMutationObserver(ref, update);

  return value;
}

export default useBoundingRect;
