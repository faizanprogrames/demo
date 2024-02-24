"use client";

export default function Button() {
  function alert() {
    console.log("Button Clicked");
  }
  return (
    <button
      className="bg-slate-600 text-white p-4 rounded-lg m-4"
      onClick={alert}
    >
      I am a button
    </button>
  );
}
