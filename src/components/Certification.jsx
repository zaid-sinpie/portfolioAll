import React from "react";

import Certificate from "./ui/Certificate.jsx";

import certi from "../certificates.js";

const Certification = () => {
  return (
    <article className="w-[50%] flex flex-col gap-2">
      {certi.map((item, index) => (
        <Certificate key={index} name={item.name} link={item.link} />
      ))}
    </article>
  );
};

export default Certification;
