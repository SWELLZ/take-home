import React from "react";

export function Message({ i, bot, message }) {
  return (
    <div className="px-2 py-2" key={i}>
      <div className="mb-2">
        <div className="flex items-center">
          <img
            src={bot}
            className="w-8 bg-gray-200 rounded-full p-[3px]"
            alt="bot profile"
            loading="lazy"
          />
          <div className="bg-gray-300 w-fit max-w-[90%] h-fit px-[12px] py-2 rounded-md ml-2">
            <p>{message.text}</p>
          </div>
        </div>
        {message.items ? (
          <div className="flex gap-4 overflow-x-scroll mt-2 ml-2">
            {message.items.map((item) => {
              console.log(item.thumbnailUrl);
              return (
                <div className="bg-gray-300 rounded-lg min-w-[200px] flex flex-col">
                  <img
                    src={item.thumbnailUrl}
                    className="w-full h-[112px] rounded-tr-lg rounded-tl-lg pointer-events-none bg-cover object-contain bg-white"
                    alt={item.title}
                  />
                  <p className="font-bold mt-2 mb-[10px] px-[12px]">
                    {item.title}
                  </p>
                  <div className="px-[12px] mb-[12px] mt-auto w-full flex">
                    <a
                      href={item.url}
                      target="__blank"
                      rel="noreferrer"
                      className="bg-white font-bold min-w-full rounded-lg text-center shadow hover:bg-gray-100 active:shadow-none"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <p className="text-xs text-gray-500">{message.timeSent}</p>
    </div>
  );
}
