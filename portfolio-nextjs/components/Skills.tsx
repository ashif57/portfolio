import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Skills & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Card 1 */}
          <div className="glassmorphism-card card-hover p-8 rounded-xl relative overflow-hidden">
            <div className="bg-neon-cyan bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i className="fas fa-server text-2xl text-neon-cyan"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Backend Development</h3>
            <ul className="list-disc list-inside text-text-light space-y-1">
              <li>Python (Flask, Django)</li>
              <li>Node.js & Express</li>
              <li>SQL & PostgreSQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          {/* Skill Card 2 */}
          <div className="glassmorphism-card card-hover p-8 rounded-xl relative overflow-hidden">
            <div className="bg-neon-cyan bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i className="fas fa-robot text-2xl text-neon-cyan"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
            <ul className="list-disc list-inside text-text-light space-y-1">
              <li>NumPy, Pandas, Streamlit, Scikit-learn</li>
              <li>TensorFlow & Keras</li>
              <li>OpenCV & CNNs</li>
              <li>LangChain, HuggingFace</li>
            </ul>
          </div>

          {/* Skill Card 3 */}
          <div className="glassmorphism-card card-hover p-8 rounded-xl relative overflow-hidden">
            <div className="bg-neon-cyan bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i className="fas fa-tools text-2xl text-neon-cyan"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Other Tools & Platforms</h3>
            <ul className="list-disc list-inside text-text-light space-y-1">
              <li>Git & GitHub</li>
              <li>Postman, Docker</li>
              <li>Supabase, Firebase</li>
              <li>Canva,Trae,VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;