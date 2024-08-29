// components/RadioButtonGroup.js
import React, { useState } from "react";

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Selected option: ${selectedOption}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            value="Option 1"
            checked={selectedOption === "Option 1"}
            onChange={handleOptionChange}
            className="mr-2"
          />
          Option 1
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="Option 2"
            checked={selectedOption === "Option 2"}
            onChange={handleOptionChange}
            className="mr-2"
          />
          Option 2
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="Option 3"
            checked={selectedOption === "Option 3"}
            onChange={handleOptionChange}
            className="mr-2"
          />
          Option 3
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default RadioButtonGroup;
