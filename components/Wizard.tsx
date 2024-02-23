"use client";

import { useState } from "react";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

export default function Wizard() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInputChange() {}
  function handleNextStep() {
    setStep(step + 1);
  }
  function handlePreviousStep() {
    setStep(step - 1);
  }
  return (
    <div>
      <form>
        {/* NAME */}
        {step === 1 && (
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="border-2 border-gray-500 rounded-md"
              value=""
              onChange={handleInputChange}
            />
            <button
              className="p-2 rounded-md border-2 border-gray-500"
              type="button"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        )}
        {/* EMAIL */}
        {step === 2 && (
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="border-2 border-gray-500 rounded-md"
              value=""
              onChange={handleInputChange}
            />
            <button
              className="p-2 rounded-md border-2 border-gray-500"
              type="button"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
            <button
              className="p-2 rounded-md border-2 border-gray-500"
              type="button"
              onClick={handleNextStep}
            >
              Next
            </button>
          </div>
        )}
        {/* PASSWORD */}
        {step === 3 && (
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="border-2 border-gray-500 rounded-md"
              value=""
              onChange={handleInputChange}
            />
            <button
              className="p-2 rounded-md border-2 border-gray-500"
              type="button"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
          </div>
        )}
        <button
          className="p-2 rounded-md border-2 border-gray-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
