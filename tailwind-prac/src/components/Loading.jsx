import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingNew = () => {
  return (
    <div className="flex items-center justify-center h-screen fixed top-0 left-0 right-0 bottom-0 backdrop-blur-xl">
      <div className="flex items-center space-x-2">
        <FaSpinner className="animate-spin text-4xl text-yellow-900" />
        <span className="font-bold text-lg text-yellow-500">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingNew;
