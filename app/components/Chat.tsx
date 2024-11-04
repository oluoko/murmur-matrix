"use client";

import Image from "next/image";
import { useState } from "react";
import Pusher from "pusher-js";

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

  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
    cluster: "mt1",
  });

  const channel = pusher.subscribe("my-channel");
  channel.bind(
    "my-event",
    function (data: {
      message: string;
      user: { name: string; image: string | null };
      createdAt: string;
    }) {
      alert(JSON.stringify(data));
    }
  );

  const getDay = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleString("en-US", { weekday: "long" });
  };

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
        {messages.map((message, index) => {
          // Determine if the previous message was sent by the same user
          const isSameUserAsPrevious =
            index > 0 && messages[index - 1].User.name === message.User.name;

          return (
            <div key={index} className="w-3/4 md:w-2/5">
              <div className="flex items-center gap-2 md:gap-4">
                {/* Only show the profile image if this message is not from the same user as the previous message */}
                <div className="w-1/5 flex flex-col items-center justify-center">
                  {!isSameUserAsPrevious && (
                    <>
                      <Image
                        src={message.User.image as string}
                        alt="Profile image of user"
                        className="size-6 md:size-12 object-cover rounded-lg mr-4 mb-2"
                        width={50}
                        height={50}
                      />
                      <p className="font-light text-xs text-gray-600">
                        {message.User.name}
                      </p>
                    </>
                  )}
                </div>
                <div
                  className={`w-${
                    isSameUserAsPrevious ? "full" : "4/5"
                  } rounded-lg bg-white shadow-md self-start`}
                >
                  <div className="p-2 px-4">{message.message}</div>
                  <div className="w-full border-t border-slate-400/30 flex justify-between p-1 px-4 font-light text-xs text-gray-600">
                    <span>{getDay(message.createdAt)}</span>
                    <span>{getTime(message.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatComponent;
