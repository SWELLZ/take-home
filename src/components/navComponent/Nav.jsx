import React from "react";
export function Nav({}) {
  return (
    <div className="flex justify-between h-[70px] w-full bg-red-800 text-white items-center absolute top-0">
      <a className="ml-8 font-bold text-2xl" href="">
        COMPANY
      </a>
      <nav className="w-[30%] flex justify-evenly mr-8">
        <a className="underline hover:no-underline" href="">
          Home
        </a>
        <a className="underline hover:no-underline" href="">
          About
        </a>
        <a className="underline hover:no-underline" href="">
          Support
        </a>
      </nav>
    </div>
  );
}
