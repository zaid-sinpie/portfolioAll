import React from "react";

const Certificate = ({ name ,link}) => {
  return (
    <figure className="flex max-sm:flex-col justify-between items-center px-4 text-center py-2 bg-firstPrimary rounded-sm">
      <h2 className="text-[#d4d4d4] uppercase font-semibold cursor-default">{name}</h2>
      <a target="_blank" href={link} className="cursor-pointer bg-actionColor text-[#000] hover:text-[#ff8b51] font-bold px-4 py-2 rounded-md">
        Check Certificate
      </a>
    </figure>
  );
};

export default Certificate;
