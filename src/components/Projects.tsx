import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="relative bg-black text-white">

      {/* Wrapper height controls stacking duration */}
      <div className="relative h-[300vh]">

        {/* Project 1 */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-10">
          <ProjectCard
            title="Project One"
            description="Full stack MERN application with authentication and real-time features."
            bg="bg-gradient-to-br from-purple-600 to-indigo-700"
          />
        </div>

        {/* Project 2 */}
        <div className="sticky top-20 h-screen flex items-center justify-center z-20">
          <ProjectCard
            title="Project Two"
            description="Scalable backend architecture with optimized API performance."
            bg="bg-gradient-to-br from-emerald-600 to-teal-700"
          />
        </div>

        {/* Project 3 */}
        <div className="sticky top-40 h-screen flex items-center justify-center z-30">
          <ProjectCard
            title="Project Three"
            description="Advanced UI interactions with smooth animations and transitions."
            bg="bg-gradient-to-br from-rose-600 to-pink-700"
          />
        </div>

      </div>

    </section>
  );
};

export default Projects;