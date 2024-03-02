// AddItemForm Component
import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    const newItem = {
      id: new Date().getTime(),
      name: itemName,
    };
    onAddItem(newItem);
    setItemName('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItemForm;
