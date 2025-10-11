import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form action="https://formsubmit.co/ashifnavheed@gmail.com" method="POST" className="space-y-6 glassmorphism-card p-8 rounded-xl">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New message from Portfolio Contact Form!" />
              <input type="hidden" name="_template" value="box" />
              <div>
                <label htmlFor="name" className="block mb-2 font-medium text-text-light">Your Name</label>
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-neon-violet focus:outline-none focus:ring-2 focus:ring-neon-cyan transition duration-300 text-text-light placeholder-gray-400" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-text-light">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-neon-violet focus:outline-none focus:ring-2 focus:ring-neon-cyan transition duration-300 text-text-light placeholder-gray-400" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-text-light">Your Message</label>
                <textarea name="message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-neon-violet focus:outline-none focus:ring-2 focus:ring-neon-cyan transition duration-300 text-text-light placeholder-gray-400" placeholder="Hello Ashif..."></textarea>
              </div>
              <button type="submit" className="btn-secondary w-full">
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-neon-cyan">Let&apos;s Connect</h3>
              <p className="mb-6 text-text-light">I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              <div className="flex space-x-6">
                <a href="https://github.com/ashif57" className="social-icon text-2xl transition duration-300 text-text-light hover:text-neon-cyan">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ashifnavheed57/" className="social-icon text-2xl transition duration-300 text-text-light hover:text-neon-cyan">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="mailto:ashifnavheed@gmail.com" className="social-icon text-2xl transition duration-300 text-text-light hover:text-neon-cyan">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="glassmorphism-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-neon-cyan">Current Availability</h3>
              <p className="mb-4 text-text-light">I&apos;m currently looking for full-time or freelance opportunities in backend development and AI/ML engineering.</p>
              <p className="text-text-light">If you have a project that needs my expertise, don&apos;t hesitate to reach out!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;