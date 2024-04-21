import React from 'react';

interface ShoppingWeekProps {
  items: string[];
}

const ShoppingWeek: React.FC<ShoppingWeekProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ShoppingWeek;