import React from "react";

const Certificate = ({ name, link }) => {
  return (
    <figure className="flex max-sm:flex-col justify-between items-center px-4 text-center py-2 border border-activeColor rounded-sm shadow-activeColor bg-highlightBg">
      <h2 className="text-[#d4d4d4] font-semibold cursor-default">
        {name}
      </h2>
      <a
        target="_blank"
        href={link}
        className="cursor-pointer bg-highlightBg text-activeColor hover:text-actionColor border border-activeColor hover:border-actionColor font-bold px-4 py-2 rounded-sm"
      >
        View Certification
      </a>
    </figure>
  );
};

export default Certificate;
