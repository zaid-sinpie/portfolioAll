import { data } from "../data.js";


const Skills = () => {
  const {skills} = data;
  return (
    <article className="w-full flex flex-col gap-2 bg-highlightBg border border-activeColor px-2 py-1">
      <h2 className="text-xl font-bold text-actionColor">Technical Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap w-fit bg-highlightBg px-2 py-1 border border-activeColor rounded-sm gap-2 items-center"
            >
              <p className="text-actionColor cursor-default">{skill.name}</p>
            </div>
          );
        })}
      </div>
      <h2 className="text-xl font-bold text-actionColor">
        Interpersonal Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap w-fit bg-highlightBg px-2 py-1 border border-activeColor rounded-sm gap-2 items-center"
            >
              <p className="text-actionColor cursor-default">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Skills;
