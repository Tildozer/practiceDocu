import React from "react";

function Loading() {
  return (
    <div className="bg-[rgba(0, 0, 0, 0.4)] flex flex-col items-center text-4 text-yellow-700 w-[100vw] h-[100vh] md:text-[6rem] lg:text-[10rem] fixed top-0 left-0 right-0 bottom-0 backdrop-blur-xl">
      <div className="border-t-4 border-t-solid w-24 h-24 border-t-yellow-400 animate-spin m-4 rounded-[50%] md:border-t-[1rem] md:w-72 md:h-72 lg:w-96 lg:h-96"></div>
      Loading...
    </div>
  );
}

export default Loading;
