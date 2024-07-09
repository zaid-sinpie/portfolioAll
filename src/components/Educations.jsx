
import React from 'react';
import Education from './ui/Education';
import educationData from '../education';

const Educations = () => {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Education</h1>
      {educationData.map((edu, index) => (
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
