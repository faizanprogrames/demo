"use client";

import { useState } from "react";

type Props = {
  id: number;
  name: string;
};

export default function AddItem() {
  const [itemName, setItemName] = useState<string>("");
  const [items, setItems] = useState<Props[]>([]);

  function handleList() {
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
      <div className="space-x-2">
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setItemName(e.target.value)
          }
          className="border border-gray-600 p-2 rounded-md"
        />
        <button
          type="button"
          className="border border-gray-600 p-2 rounded-md"
          onClick={handleList}
        >
          Add Item
        </button>
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
