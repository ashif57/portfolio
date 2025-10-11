import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Experience</h2>
        <div className="glassmorphism-card p-8 rounded-xl relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">Full Stack Development Intern</h3>
              <p className="text-neon-cyan font-medium">VDart Technologies Pvt Ltd</p>
              <p className="text-sm text-text-light mt-1">[July 7 – August 1, 2025]</p>
            </div>
            <a href="#" className="btn-secondary">Credential Link</a>
          </div>
          <ul className="list-disc list-inside text-text-light space-y-2 mt-4">
            <li>Gained hands-on experience with the Django framework for backend development and PostgreSQL for relational database management.</li>
            <li>Strengthened practical skills in MVC architecture, backend logic, and database modeling.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;