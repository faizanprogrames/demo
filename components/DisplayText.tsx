"use client";

import { useState } from "react";

export default function DisplayText() {
  const [visibleContent, setVisibleContent] = useState<boolean>(false);

  function handleVisibleContent() {
    setVisibleContent(true);
  }

  function handleHideContent() {
    setVisibleContent(false)
  }
  return (
    <div className="mt-5 space-x-4">
      <button
        type="button"
        className="border border-gray-700 p-2 rounded-lg"
        onClick={handleVisibleContent}
      >
        Show
      </button>
      <span>{visibleContent ? "Content is Visible" : "Content is Hidden"}</span>
      <button className="border border-gray-700 p-2 rounded-lg" onClick={handleHideContent}>Hide</button>
    </div>
  );
}
