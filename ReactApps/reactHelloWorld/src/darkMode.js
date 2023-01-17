import React from "react";
import { useState } from "react";

const DarkMode = () => {
  const [useDarkMode, setUseDarkMode] = useState(false);
  return (
    <div className={useDarkMode ? "dark-mode dark" : "dark-mode light"}>
      <h1>Dark Mode</h1>
      <label>
        <input
          type="checkbox"
          onChange={(ev) => {
            let nextValue = !useDarkMode;
            setUseDarkMode(nextValue);
          }}
        />
        <span>Use Dark mode?</span>
      </label>
    </div>
  );
};

export default DarkMode;
