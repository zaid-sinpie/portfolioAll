import React from "react";

const Project = ({ name, gitLink, link }) => {
  return (
    <figure className="flex justify-between items-center text-center bg-firstPrimary rounded-sm bg-highlightBg border border-activeColor px-2 py-1">
      <h2 className="text-[#d4d4d4] uppercase hover:underline decoration-secondary font-semibold cursor-default">
        {name}
      </h2>
     <div className="flex gap-4">
     <a
        target="_blank"
        href={link}
        className="cursor-pointer bg-highlightBg text-activeColor hover:text-actionColor hover:border-actionColor border border-activeColor px-4 py-2 rounded-md"
      >
        Link
      </a>
      <a
        target="_blank"
        href={gitLink}
        className="cursor-pointer bg-highlightBg text-activeColor hover:text-actionColor border border-activeColor hover:border-actionColor px-4 py-2 rounded-md"
      >
        GitLink
      </a>
     </div>
    </figure>
  );
};

export default Project;
