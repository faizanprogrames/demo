"use client";

import { useState } from "react";

export default function DisplayFormData() {
  const [value, setValue] = useState<string>("");

  function handleInputName(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="mt-5 space-x-2">
      <input
        type="text"
        placeholder="Enter your name"
        className="border border-gray-600 p-2 rounded-md outline-none"
        onChange={handleInputName}
      />
      <p>The updated value of name is: {value}</p>
    </div>
  );
}
