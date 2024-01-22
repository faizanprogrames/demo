"use client";

import { useState } from "react";

type ListItem = {
  id: number;
  name: string;
}

type Props = {
  initialItems: ListItem[];
}

export default function AddItem({ initialItems }: Props) {
  const [items, setItems] = useState<ListItem[]>(initialItems);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim() !== "") {
      const newItem: ListItem = {
        id: Date.now(),
        name: newItemName.trim(),
      };
      setItems([...items, newItem]);
      setNewItemName("");
    }
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div>
        <label>
          New Item:
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
        </label>
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
}
