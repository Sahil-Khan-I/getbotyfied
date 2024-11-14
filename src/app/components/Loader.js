// components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-spin border-t-2 border-blue-500"></div>
      <div className="text-blue-500">Loading...</div>
    </div>
  );
};

export default Loader;
