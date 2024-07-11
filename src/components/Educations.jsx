import Education from "./ui/Education";

import { data } from "../data.js";

const Educations = () => {
  const { education } = data;
  return (
    <section className="w-full py-6 px-4 bg-highlightBg border border-activeColor rounded-sm">
      <h1 className="text-2xl font-bold mb-6 text-actionColor">Education</h1>
      {education.map((edu, index) => (
        <figure key={index} className="mb-6">
          <Education
            institution={edu.institution}
            degree={edu.degree}
            year={edu.year}
            percentage={edu.percentage}
          />
        </figure>
      ))}
    </section>
  );
};

export default Educations;
