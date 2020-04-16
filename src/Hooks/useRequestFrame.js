import { useCallback, useLayoutEffect, useRef } from 'react';

const useRequestFrame = (callback, active) => {
  const callbackRef = useRef(callback);
  const frameRef = useRef(null);

  useLayoutEffect(() => {
    if (active) callbackRef.current = callback;
  }, [active, callback]);

  const loop = useCallback(() => {
    frameRef.current = requestAnimationFrame(loop);
    const cb = callbackRef.current;
    cb(() => cancelAnimationFrame(frameRef.current));
  }, [callbackRef, frameRef]);

  useLayoutEffect(() => {
    if (active) frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, [active, loop]);
};

export default useRequestFrame;
