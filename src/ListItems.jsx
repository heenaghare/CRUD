// ListItems Component
import React from 'react';

const ListItems = ({ items, onDeleteItem }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
