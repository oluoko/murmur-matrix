"use client";

import { useState } from "react";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  return (
    <div className="p-6 flex-grow max-h-full overflow-y-auto py-32">
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default ChatComponent;
