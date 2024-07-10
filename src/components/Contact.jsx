import React from "react";

const Contact = () => {
  return (
    <form
      className="w-full flex flex-col items-center justify-around gap-2 max-sm:gap-1 px-4 py-4 bg-highlightBg border border-activeColor rounded-sm"
      action="#"
    >
      <h1 className="uppercase text-xl font-bold text-actionColor">
        Contact Me
      </h1>
      <div className="flex w-full justify-around items-center">
        <div className="flex flex-col text-xl mb-4 gap-2 text-actionColor">
          <label htmlFor="name" className="text-[15px]">
            Name
          </label>
          <input
            className="rounded text-actionColorc bg-highlightBg border border-activeColor text-[15px] max-sm:text-xs px-2 py-1 outline-none"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="flex flex-col text-xl mb-4 gap-2 text-actionColor">
          <label htmlFor="email" className="text-[15px]">
            Email
          </label>
          <input
            className="rounded text-actionColorc bg-highlightBg border border-activeColor text-[15px] max-sm:text-xs px-2 py-1 outline-none"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="flex flex-col mb-4 text-xl w-full gap-2 text-actionColor">
        <label htmlFor="message" className="text-[15px]">
          Message
        </label>
        <textarea
          className="rounded-md text-actionColorc bg-highlightBg border border-activeColor outline-none text-[15px] max-sm:text-xs px-2 py-2"
          rows={"5"}
          name="message"
          id="message"
        ></textarea>
      </div>
      <button className=" bg-highlightBg border border-activeColor hover:border-actionColor text-activeColor hover:text-actionColor uppercase px-2 py-2 rounded w-full">
        Submit
      </button>
    </form>
  );
};

export default Contact;
