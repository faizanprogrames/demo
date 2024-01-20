"use client";

import { useState } from "react";

type Props = {
  id: number;
  name: string;
};

export default function List() {
  const [items, setItems] = useState<Props[]>([]);
  const [itemName, setItemName] = useState<string>("");

  function handleAddItem() {
    if (itemName.trim() !== "") {
      const newItem: Props = {
        id: items.length + 1,
        name: itemName,
      };

      setItems([...items, newItem]);
      setItemName("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
        className="border border-black p-2 rounded-lg"
      />
      <button onClick={handleAddItem}>Add Item</button>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
