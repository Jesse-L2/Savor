import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">Header</div>
      <img className="w-full h-full object-cover" alt="Hero Image"></img>
      <div className="absolute w-full h-full">
        <h1>Base Text</h1>
      </div>
    </div>
  );
};
