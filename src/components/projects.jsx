import React from 'react';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one.",
    image: "/path-to-image1.jpg",
    techStack: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    image: "/path-to-image2.jpg",
    techStack: ["TypeScript", "Express", "PostgreSQL"]
  }
  // Add more projects as needed
];

const Projects = () => (
  <section className="py-20 bg-gray-50" id="projects">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
