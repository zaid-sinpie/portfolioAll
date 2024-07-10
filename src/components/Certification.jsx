import React from "react";

import Certificate from "./ui/Certificate.jsx";

import certi from "../certificates.js";

const Certification = () => {
  return (
    <article className="w-full flex flex-col gap-2 bg-highlightBg px-2 py-1 border border-activeColor">
      <h1 className="text-xl font-bold text-actionColor">Certificates</h1>
      {certi.map((item, index) => (
        <Certificate key={index} name={item.name} link={item.link} />
      ))}
    </article>
  );
};

export default Certification;
