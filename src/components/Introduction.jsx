const Introduction = () => {
  return (
    <figure className="flex flex-col w-[50%] border border-activeColor bg-[#44ff6036] rounded-sm px-3 py-2">
      <article>
        <div className="display-flex mb-4  h-fit">
          <h1 className="text-2xl font-bold text-[#fff]">
            Hii I'm Dilip Dandi👋
          </h1>
          <h3 className="text-xl font-semibold text-[#3aff96]">
            Software Engineer
          </h3>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 text-[#e3e3e3]">
          <p className="font-semibold">
            - Frontend Developer with passion for UI/UX design & frontend
            development.
          </p>
          <p className="font-semibold">
            - Seeking opportunity in Frontend development & UI/UX designing.
          </p>
          <p className="font-semibold">
            - I have hands on expeirence in developing web applications and
            websites using reactJS and vanilla JS.
          </p>
        </div>
      </article>
    </figure>
  );
};

export default Introduction;
