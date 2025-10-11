import React from 'react';

const Frameworks = () => {
  return (
    <section id="frameworks" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Frameworks and Tech Stacks familiar with</h2>
        <div className="relative flex justify-center items-center h-96">
          <div className="framework-orbit">
            <div className="framework-icon" style={{ '--i': 0 } as React.CSSProperties}><i className="devicon-react-original"></i><span>React</span></div>
            <div className="framework-icon" style={{ '--i': 1 } as React.CSSProperties}><i className="devicon-django-plain"></i><span>Django</span></div>
            <div className="framework-icon" style={{ '--i': 2 } as React.CSSProperties}><i className="devicon-fastapi-plain"></i><span>FastAPI</span></div>
            <div className="framework-icon" style={{ '--i': 3 } as React.CSSProperties}><i className="devicon-flask-original"></i><span>Flask</span></div>
            <div className="framework-icon" style={{ '--i': 4 } as React.CSSProperties}><i className="devicon-nextjs-original"></i><span>Next.js</span></div>
            <div className="framework-icon" style={{ '--i': 5 } as React.CSSProperties}><i className="devicon-postgresql-plain"></i><span>PostgreSQL</span></div>
            <div className="framework-icon" style={{ '--i': 6 } as React.CSSProperties}><i className="devicon-html5-plain"></i><span>HTML5</span></div>
            <div className="framework-icon" style={{ '--i': 7 } as React.CSSProperties}><i className="devicon-css3-plain"></i><span>CSS3</span></div>
            <div className="framework-icon" style={{ '--i': 8 } as React.CSSProperties}><i className="devicon-tailwindcss-plain"></i><span>Tailwind</span></div>
            <div className="framework-icon" style={{ '--i': 9 } as React.CSSProperties}><i className="devicon-github-original"></i><span>GitHub</span></div>
            <div className="framework-icon" style={{ '--i': 10 } as React.CSSProperties}><i className="devicon-mongodb-plain"></i><span>MongoDB</span></div>
            <div className="framework-icon" style={{ '--i': 11 } as React.CSSProperties}><i className="devicon-python-plain"></i><span>Python</span></div>
            <div className="framework-icon" style={{ '--i': 12 } as React.CSSProperties}><i className="devicon-vuejs-plain"></i><span>Vue.js</span></div>
          </div>
          <div className="framework-center-icon">
            <i className="devicon-devicon-plain"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frameworks;