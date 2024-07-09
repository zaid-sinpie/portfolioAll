
import React from 'react';

const Education = ({ institution, degree, year, percentage }) => {
  return (
    <article className="px-4 text-start py-2 border border-orange-300 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-medium">{institution}</h2>
      <p className="text-sm font-medium text-black-600">{year}</p>
      <h3 className="text-lg font-medium">{degree}</h3>
      <p className="text-black-700 font-medium ">{percentage}</p>
    </article>
  );
};

export default Education;
