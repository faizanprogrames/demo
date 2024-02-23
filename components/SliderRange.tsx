"use client";

import { useState } from "react";

type SliderRangeProps = {
  min: number;
  max: number;
};

export default function SliderRange() {
  const [sliderRange, setSliderRange] = useState<SliderRangeProps>({
    min: 0,
    max: 100,
  });
  function handleSliderChange(
    event: React.ChangeEvent<HTMLInputElement>,
    minMax: "min" | "max"
  ) {
    const newValue = parseInt(event.target.value);
    setSliderRange((prevState) => ({
      ...prevState,
      [minMax]: newValue,
    }));
  }
  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={sliderRange.min}
        onChange={(e) => handleSliderChange(e, "min")}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={sliderRange.max}
        onChange={(e) => handleSliderChange(e, "max")}
      />
      <div>
        Selected Range: {sliderRange.min} - {sliderRange.max}
      </div>
    </div>
  );
}
