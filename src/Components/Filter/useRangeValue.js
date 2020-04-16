import { useState } from 'react';

const useRangeValue = initialRange => {
  const [range, setRange] = useState(initialRange);
  const handleRangeChange = (valueA, valueB) => {
    setRange([valueA, valueB]);
  };

  return [range[0], range[1], handleRangeChange, setRange];
};

export default useRangeValue;
