"use client";

import { useState } from "react";

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState<string>("");

  function handleColor(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedColor(e.target.value);
  }
  return (
    <div>
      <input type="color" value={selectedColor} onChange={handleColor} />
      <div
        style={{
            fontSize: "20px",
            fontWeight: "800",
            color: selectedColor,
        }}
      >
        COLOR
      </div>
    </div>
  );
}
