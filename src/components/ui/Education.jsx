import React from "react";

const Education = ({ institution, degree, year, percentage }) => {
  return (
    <article className="px-4 text-start py-2 border border-activeColor border-orange-300 shadow-md mb-4 bg-highlightBg rounded-sm">
      <h2 className="text-[15px] text-activeColor">{institution}</h2>
      <p className="text-[12px] text-black-600 text-actionColor">{year}</p>
      <h3 className="text-[15px] text-actionColor">{degree}</h3>
      <p className="text-[12px] text-actionColor font-bold">{percentage}</p>
    </article>
  );
};

export default Education;
