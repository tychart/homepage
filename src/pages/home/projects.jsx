import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one.",
    image: "/path-to-image1.jpg",
    techStack: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    image: "/path-to-image2.jpg",
    techStack: ["TypeScript", "Express", "PostgreSQL"],
  },
  // Add more projects as needed
];

const Projects = () => (
  <section className="py-20" id="projects">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-4 h-64 w-full rounded-lg object-cover"
            />
            <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
            <p className="mb-4 text-gray-600">{project.description}</p>
            <div className="flex space-x-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
                >
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
