import Certificate from "./ui/Certificate.jsx";

import { data } from "../data.js";

const Certification = () => {
  const { certificates } = data;
  return (
    <article className="w-full flex flex-col gap-2 bg-highlightBg px-2 py-1 border border-activeColor">
      <h1 className="text-xl font-bold text-actionColor">Certificates</h1>
      {certificates.map((item, index) => (
        <Certificate key={index} name={item.name} link={item.link} />
      ))}
    </article>
  );
};

export default Certification;
