import tetrisImage from "../../assets/tetris_login.png";
import recipebookImage from "../../assets/recipebook_picture.png";
import homepageImage from "../../assets/homepage_picture.png";
import plannerrImage from "../../assets/planner_picture.png";
import readflowImage from "../../assets/readflow_picture.png";

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
    title: "Plannerr",
    description:
      "A polished, self-hostable school planner that keeps assignments, quizzes, and exams in one installable PWA. It has class organization, markdown notes and links, offline caching, backups, and optional AI-written daily push summaries.",
    image: plannerrImage,
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "FastAPI",
      "PostgreSQL",
      "PWA",
    ],
    link: "https://github.com/tychart/plannerr",
  },
  {
    id: 4,
    title: "ReadFlow",
    description:
      "A private long-form text-to-speech app for turning pasted text into buffered narration. A FastAPI scheduler batches Qwen3-TTS work on one GPU, streams chunk status over WebSockets, and serves a focused React reader UI.",
    image: readflowImage,
    techStack: [
      "React",
      "TypeScript",
      "FastAPI",
      "WebSockets",
      "Qwen3-TTS",
      "PyTorch",
    ],
    link: "https://github.com/tychart/readflow",
  },
  {
    id: 5,
    title: "Homepage",
    description: "This is the custom made portfolio webpage you are currently looking at. This is being served all completely self-hosted in my homelab by an Nginx docker container running on my production VM on Proxmox",
    image: homepageImage,
    techStack: ["React", "TailwindCSS", "Typescript", "Nginx"],
    link: "https://github.com/tychart/homepage",
  }
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
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400/60"
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="mb-5 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="max-w-full rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 break-words whitespace-normal dark:bg-blue-500/20 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
