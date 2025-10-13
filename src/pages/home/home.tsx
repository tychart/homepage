import Projects from "./projects";
import profileImage from "../../assets/profile_picture.jpg";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <Projects />
    </div>
  );
};

const HeroSection = () => (
  <section className="min-h-screen bg-gradient-to-b pt-32">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:w-1/2">
          <h1 className="mb-6 text-5xl font-bold text-gray-800 dark:text-gray-100">
            Full Stack Developer
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
            Building digital experiences with React, Node.js, and modern web
            technologies
          </p>
          <button className="rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors duration-300 hover:bg-blue-700">
            View Projects
          </button>
        </div>
        <img
          className="mt-10 h-auto w-48 rounded-xl border-4 border-slate-300 object-cover shadow-lg md:mt-0 md:ml-auto md:w-80"
          src={profileImage}
          alt="Image"
        />
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section className="bg-white py-20 dark:bg-gray-800" id="skills">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="mb-12 text-center text-3xl font-bold dark:text-gray-100">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
        {["React", "Ansible", "Node.js", "TypeScript", "MongoDB"].map(
          (skill) => (
            <div
              key={skill}
              className="rounded-xl bg-gray-50 p-4 transition-shadow duration-300 hover:shadow-lg dark:bg-blue-600"
            >
              <h3 className="text-center text-xl font-semibold">{skill}</h3>
            </div>
          ),
        )}
      </div>
    </div>
  </section>
);

export default Home;
