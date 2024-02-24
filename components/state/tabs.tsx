"use client";

import { useState } from "react";

type TabDataProps = {
  id: number;
  title: string;
  content: string;
};

const tabData: TabDataProps[] = [
  { id: 0, title: "Tab 1", content: "Content of Tab 1" },
  { id: 1, title: "Tab 2", content: "Content of Tab 2" },
  { id: 2, title: "Tab 3", content: "Content of Tab 3" },
  { id: 3, title: "Tab 4", content: "Content of Tab 4" },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(0);
  function handleClick(tabId: number) {
    setActiveTab(tabId);
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        {tabData.map((tab) => (
          <div key={tab.id}>
            <button
              className={`tab${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleClick(tab.id)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div className="text-center">
        {tabData.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
}
