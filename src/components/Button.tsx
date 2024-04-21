import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [count, setCount] = useState<number>(5);

  const incrementCount = () => {
    setCount(count + 50);
  };

  return <button onClick={incrementCount}>Valor: {count}</button>;
};

export default Button;