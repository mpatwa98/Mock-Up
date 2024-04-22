"use client";
import { useState, ChangeEvent } from "react";
import { FormControl, FormItem, FormLabel } from "./form";
import { Input } from "./input";

const ColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#000000"); // Initial color

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedColor(value);
  };

  return (
    <div>
      <FormItem>
        <FormLabel>Background color</FormLabel>
        <FormControl>
          <Input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            className="w-1/2"
          />
        </FormControl>
      </FormItem>
    </div>
  );
};

export default ColorPicker;
