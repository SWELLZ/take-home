import { Item } from "./Item";
import React from "react";

export function Message({ i, bot, user, message }) {
  return (
    <>
      {message.sentByUser ? (
        <div className="px-2 py-2 mr-0 ml-auto" key={i}>
          <div className="mb-2 ">
            <div className="flex items-center">
              <div className="bg-blue-300 mr-0 w-fit max-w-[90%] h-fit px-[12px] py-2 rounded-md ml-auto">
                <p>{message.text}</p>
              </div>
              <img
                src={user}
                className="w-8 bg-gray-200 rounded-full p-[3px] mr-0 ml-2"
                alt="bot profile"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500">{message.timeSent}</p>
        </div>
      ) : (
        <div className="px-2 py-2" key={i}>
          <div className="mb-2 ">
            <div className="flex items-center">
              <img
                src={bot}
                className="w-8 bg-gray-200 rounded-full p-[3px]"
                alt="bot profile"
                loading="lazy"
              />
              <div className="bg-gray-300 w-fit max-w-[90%] h-fit px-[12px] py-2 rounded-md ml-2">
                <p>
                  {message.text.split("\n").map((i) => (
                    <span className="block">{i}</span>
                  ))}
                </p>
              </div>
            </div>
            {message.items ? (
              <div className="flex gap-4 overflow-x-scroll mt-2 ml-2">
                {message.items.map((item) => {
                  return <Item item={item} />;
                })}
              </div>
            ) : null}
          </div>
          <p className="text-xs text-gray-500">{message.timeSent}</p>
        </div>
      )}
    </>
  );
}
