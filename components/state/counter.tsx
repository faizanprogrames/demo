"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(10);

  function handleIncrement() {
    setCount(count + 5);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 5);
    }
  }
  return (
    <div className="mt-5 space-x-4">
      <button
        type="button"
        className="border border-gray-700 p-2 rounded-lg"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className="border border-gray-700 p-2 rounded-lg"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}
