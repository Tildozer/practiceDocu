import React from "react";

function Loading() {
  return (
    <div>
      <svg className="bg-yellow-100 float-right" width="100" height="100">
        <circle
          className="animate-spin h-80 w-80"
          cx="100"
          cy="100"
          r="100"
          stroke="green"
          stroke-width="4"
        />
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          className="stroke-white stroke-2"
        />
      </svg>
      Loading...
    </div>
  );
}

export default Loading;
