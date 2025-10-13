import tetrisImage from "../../assets/tetris_login.png";

const projects = [
  {
    id: 1,
    title: "Tetris Dual",
    description:
      "This spin off of classic tetris allows you to play Tetris aginst an opponent, where the last person standing wins. This uses websockets along with a custom compresson algorithm to be able to give real time updates of the gameboard between the 2 players.",
    image: tetrisImage,
    techStack: ["React", "Node.js", "MongoDB", "WebSocket"],
    link: "https://github.com/tychart/tetrisdual",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    image: "/path-to-image2.jpg",
    techStack: ["TypeScript", "Express", "PostgreSQL"],
    link: "https://github.com/tychart/tetrisdual",
  },
  // Add more projects as needed
];

const Projects = () => (
  <section className="py-20" id="projects">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="mb-12 text-center text-3xl font-bold dark:text-gray-100">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.id}
            className="rounded-xl bg-white p-6 transition-shadow duration-300 hover:shadow-xl"
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
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
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
