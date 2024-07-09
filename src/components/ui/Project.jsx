import React from "react";

const Project = ({ name, gitLink, link }) => {
  return (
    <figure className="flex max-sm:flex-col justify-between items-center px-4  text-center py-2 bg-firstPrimary rounded-sm">
      <h2 className="text-[#d4d4d4] uppercase hover:underline decoration-secondary font-semibold cursor-default">
        {name}
      </h2>
     <div className="flex gap-4">
     <a
        target="_blank"
        href={link}
        className="cursor-pointer bg-actionColor text-[#000] hover:text-[#dc3838] font-bold px-4 py-2 rounded-md"
      >
        Link
      </a>
      <a
        target="_blank"
        href={gitLink}
        className="cursor-pointer bg-actionColor text-[#000] hover:text-[#dc3838] font-bold px-4 py-2 rounded-md"
      >
        GitLink
      </a>
     </div>
    </figure>
  );
};

export default Project;
