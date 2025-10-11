import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Certifications & Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Certification 1 */}
          <div className="glassmorphism-card card-hover p-8 rounded-xl relative overflow-hidden">
            <div className="bg-neon-cyan bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i className="fas fa-microchip text-2xl text-neon-cyan"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-ML Development Certificate</h3>
            <p className="text-text-light mb-4">Projects included Lane Detection, Heat Wave Alert System, and Plant Leaf Disease Detection.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neon-cyan font-medium">Next24tech | Aug 2024</span>
              <a href="https://www.linkedin.com/in/ashifnavheed57/" target="_blank" className="text-white hover:text-neon-cyan transition duration-300">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* Certification 2 */}
          <div className="glassmorphism-card card-hover p-8 rounded-xl relative overflow-hidden">
            <div className="bg-neon-cyan bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i className="fas fa-code text-2xl text-neon-cyan"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Django Development Certificate</h3>
            <p className="text-text-light mb-4">Hands-on project work with authentication, CRUD, environment setup, and backend logic.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neon-cyan font-medium">HCL GUVI | June 2024</span>
              <a href="https://www.guvi.in/share-certificate/59q06S49JQ14t75w07" target="_blank" className="text-white hover:text-neon-cyan transition duration-300">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          {/* Certification 3 */}
          <div className="glassmorphism-card card-hover p-8 rounded-xl relative overflow-hidden">
            <div className="bg-neon-cyan bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <i className="fas fa-brain text-2xl text-neon-cyan"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Generative AI Applications</h3>
            <p className="text-text-light mb-4">Built RAG-based AI apps with LLMs and Python. Focused on practical Generative AI integration.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neon-cyan font-medium">HCL GUVI | June 2025</span>
              <a href="https://www.guvi.in/share-certificate/1W6YsJnV8709t52L11" target="_blank" className="text-white hover:text-neon-cyan transition duration-300">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="https://www.linkedin.com/in/ashifnavheed57/details/certifications/" target="_blank"
            className="btn-primary inline-block">
            View All Certifications <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;