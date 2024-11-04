"use client";

import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  data: {
    User: {
      image: string | null;
      name: string | null;
    };
    message: string;
    createdAt: string;
  }[];
}

const ChatComponent = ({ data }: iAppProps) => {
  const [messages, setMessages] = useState(data);

  // function to get day of the week from date string
  const getDay = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleString("en-US", { weekday: "long" });
  };

  // function to get the time in the format HH:MM AM/PM from date string
  const getTime = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="p-2 flex-grow max-h-full overflow-y-auto py-32">
      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <div key={index} className="w-3/4 md:w-2/5">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-1/5 flex flex-col items-center justify-center">
                <Image
                  src={message.User.image as string}
                  alt="Profile image of user"
                  className="size-6 md:size-12 object-cover rounded-lg mr-4 mb-2"
                  width={50}
                  height={50}
                />{" "}
                <p className="font-light text-xs text-gray-600">
                  {message.User.name}
                </p>
              </div>
              <div className=" w-4/5 rounded-lg bg-white  shadow-md self-start">
                <div className="p-2 px-4">{message.message}</div>
                <div className="w-full border-t  border-slate-400/30 flex justify-between p-2 px-4 font-light text-xs text-gray-600">
                  <span>{getDay(message.createdAt)}</span>
                  <span>{getTime(message.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
