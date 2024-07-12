import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTailwindcss, SiMongodb,SiFlask, SiPostgresql, SiFastapi, SiPython, SiTensorflow, SiOpencv, SiFirebase, SiRedux, SiSpacy, SiFsharp } from 'react-icons/si';

const projects = [
  { 
    id: 1, 
    title: 'Bachelor Project: HerBERTa', 
    description: 'HerBERT - An information extraction pipeline for NHMD-Herbarium-sheets', 
    github: 'https://github.com/boussnina/HerBERTa', 
    // demo: 'https://demo1.com', 
    tech: ['Python',"Spacy", "Yolov8"],
    color: 'from-orange-300 to-yellow-600'
  },
  { 
    id: 2, 
    title: 'Expense Tracker', 
    description: 'Full-Stack Web Application', 
    github: 'https://github.com/CodeIsLong123/Expense-Tracker', 
    // demo: 'https://demo1.com', 
    tech: ['Python', "React", "PostgreSQL", "FastAPI"],
    color: 'from-orange-300 to-yellow-600'
  },
  {
    id: 3,
    title: 'Lil Stockzz',
    description: 'Full Stack Web application. A stock market simulator where you can monitor stocks.',
    github: "",
    tech: ['Python', 'Flask', 'PostgreSQL'],
    color: 'from-orange-300 to-yellow-600'
  },
  {
    id: 4,
    title: "My Page", 
    description: 'Tge page you are currently on',
    github: "",
    tech: ['React', 'TailwindCSS'],
    color: 'from-orange-300 to-yellow-600'  
  }
];

const TechIcon = ({ tech }) => {
  const iconMap = {
    'React': SiReact,
    'Node.js': SiNodedotjs,
    'MongoDB': SiMongodb,
    'Python': SiPython,
    'TensorFlow': SiTensorflow,
    'OpenCV': SiOpencv,
    'Firebase': SiFirebase,
    'Redux': SiRedux,
    'Flask': SiFlask,
    'PostgreSQL': SiPostgresql,
    'FastAPI': SiFastapi,
    'Spacy': SiSpacy,
    'TailwindCSS': SiTailwindcss,

  };
  const Icon = iconMap[tech];
  return Icon ? <Icon className="text-white text-xl" title={tech} /> : null;
};

const ProjectCard = ({ project }) => {
  return (
    <div className={`w-64 h-80 rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-lg `}>
      <div className={`p-4 bg-gradient-to-br ${project.color} h-3/4`}>
        <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-white text-opacity-90 text-sm mb-3">{project.description}</p>
        <div className="flex gap-2 mb-3">
          {project.tech.map((tech, index) => (
            <TechIcon key={index} tech={tech} />
          ))}
        </div>
      </div>
      <div className="bg-orange-100 px-4 py-3 flex justify-between items-center h-1/4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-800 hover:text-gray-600 transition-colors text-sm"
        >
          <FaGithub className="mr-1" size={16} />
          <span className="font-semibold">Code</span>
        </a>
        {/* <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-800 hover:text-gray-600 transition-colors text-sm"
        >
          <FaExternalLinkAlt className="mr-1" size={14} />
          <span className="font-semibold">Demo</span>
        </a> */}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
    <div id="projectPage" className="w-full min-h-screen flex flex-col items-center py-12 px-6 justify-center">
      <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-100 to-red-200">
        My Projects
      </h1>
      <p className="text-xl text-gray-400 mb-12">Welcome to my creative space</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <p className="text-gray-400 text-center">
          More projects on{' '}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline"
          >
            Github
          </a>
        </p>

      </div>
      <style jsx>{`
        #projectPage::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center bottom;
          z-index: -1;
        }
      `}</style>
      
    </div>
    <footer className='text-center text-orange-400'>
      <p >© 2024 Build with love and Coffee.</p>

  </footer>
  </>
  );
};

export default About;