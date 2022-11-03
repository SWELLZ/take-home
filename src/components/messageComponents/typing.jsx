import React from "react";
export function Typing({ bot }) {
  return (
    <div className="px-2 py-2">
      <div className="flex items-center">
        <img
          src={bot}
          className="w-8 bg-gray-200 rounded-full p-[3px]"
          alt="bot profile"
          loading="lazy"
        />
        <div className="bg-gray-300 w-fit h-fit px-[12px] py-2 rounded-md ml-2">
          <p>. . .</p>
        </div>
      </div>
    </div>
  );
}
