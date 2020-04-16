import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [active, setActive] = useState(initialState);

  const toggle = () => {
    setActive(active => !active);
  };

  return [active, toggle];
};

export default useToggle;
