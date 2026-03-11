import tetrisImage from "../../assets/tetris_login.png";
import recipebookImage from "../../assets/recipebook_login.png";
import homepageImage from "../../assets/homepage_picture.png";

const projects = [
  {
    id: 1,
    title: "Tetris Dual",
    description:
      "This spin off of classic tetris allows you to play Tetris aginst an opponent, where the last person standing wins. This uses websockets along with a custom compresson algorithm to be able to give real time updates of the gameboard between the 2 players.",
    image: tetrisImage,
    techStack: ["React", "Bootstrap", "Node.js", "MongoDB", "WebSocket"],
    link: "https://github.com/tychart/tetrisdual",
  },
  {
    id: 2,
    title: "RecipeBook",
    description: "RecipeBook is a fully open source, self hostable recipe database and manager. Each user can upload their own recipes and easily share and collaberate with others.",
    image: recipebookImage,
    techStack: ["React", "TailwindCSS", "Typescript", "FastAPI", "PostgreSQL", "S3", "Ollama"],
    link: "https://github.com/tychart/recipebook",
  },
  {
    id: 3,
    title: "Homepage",
    description: "This is the custom made portfolio webpage you are currently looking at. This is being served all completely self-hosted in my homelab by an Nginx docker container running on my production VM on Proxmox",
    image: homepageImage,
    techStack: ["React", "TailwindCSS", "Typescript", "Nginx"],
    link: "https://github.com/tychart/homepage",
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
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="max-w-full rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 break-words whitespace-normal"
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
