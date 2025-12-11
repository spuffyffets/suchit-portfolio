import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
const Projects = () => {
  return (
    <div id="projects" className="relative my-16">

      {/* 🔥 Glow background behind heading */}
      <div className="w-[120px] h-[120px] bg-violet-500/30 rounded-full absolute 
                      left-1/2 -translate-x-1/2 -top-2 blur-3xl opacity-30"></div>

      {/* 🔥 Heading with gradient line + capsule */}
      <div className="flex justify-center mt-5 mb-12">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>

          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md shadow-lg">
            Projects
          </span>

          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
