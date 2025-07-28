import Projects from './projects';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <Projects />
    </div>
  )
}

  const HeroSection = () => (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building digital experiences with React, Node.js, and modern web technologies
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              View Projects
            </button>
          </div>
          {/* Add your profile illustration or image here */}
        </div>
      </div>
    </section>
  );
  
  const SkillsSection = () => (
    <section className="py-20 bg-white" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((skill) => (
            <div key={skill} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-center">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  


export default Home;