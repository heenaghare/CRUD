// App Component (top-level component)
import React, { useState } from 'react';
import ListItems from './ListItems';
import AddItemForm from './AddItemForm';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>CRUD Operations in React</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <ListItems items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
};

export default App;
