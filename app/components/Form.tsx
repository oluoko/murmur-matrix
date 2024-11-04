"use client";

const Form = () => {
  return (
    <form className="p-6 absolute bottom-0 left-0 w-full bg-white border-r border-slate-400/30 ">
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message here"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
