"use client";

import { useRef } from "react";
import { postData } from "../action";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="p-6 absolute -bottom-1 right-0 w-full bg-white border border-slate-400/30 overflow-hidden"
    >
      <div className="flex">
        <input
          type="text"
          name="message"
          placeholder="Type your message here"
          className="w-full p-2 px-4 md:px-6 border border-gray-300 rounded-full"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full ml-2"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
