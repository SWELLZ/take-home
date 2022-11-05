import React from "react";
export function Item({item}) {
  return (
    <div className="bg-gray-300 rounded-lg min-w-[200px] flex flex-col">
      <img
        src={item.thumbnailUrl}
        className="w-full h-[112px] rounded-tr-lg rounded-tl-lg pointer-events-none bg-cover object-contain bg-white"
        alt={item.title}
      />
      <p className="font-bold mt-2 mb-[10px] px-[12px]">{item.title}</p>
      <div className="px-[12px] mb-[12px] mt-auto w-full flex">
        <a
          href={item.url}
          target="__blank"
          rel="noreferrer"
          className="bg-white font-bold min-w-full rounded-lg text-center shadow hover:bg-gray-100 active:shadow-none"
        >
          {item.cta}
        </a>
      </div>
    </div>
  );
}
