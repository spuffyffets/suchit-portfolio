import React from "react";
import Image from "next/image";

function ProjectCard({ project }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl 
        bg-[#10172a] border border-[#1f2a44]
        shadow-lg hover:shadow-2xl 
        transition-all duration-500
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-64">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="
            object-cover rounded-2xl 
            group-hover:scale-110 transition-all duration-500
          "
        />

        {/* HOVER OVERLAY */}
        <div
          className="
            absolute inset-0 bg-black/60 opacity-0 
            group-hover:opacity-100 transition-all duration-500 
            flex items-center justify-center
          "
        >
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-2 bg-[#16f2b3] text-black font-semibold 
                rounded-lg text-lg shadow-md hover:scale-105 
                transition-all duration-300
              "
            >
              Launch
            </a>
          )}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-5 text-center">
        {/* PROJECT TITLE */}
        <h2 className="text-xl font-bold text-[#16f2b3] mb-4">
          {project.name}
        </h2>

        {/* TECH STACK BADGES */}
        <div className="flex flex-wrap justify-center gap-2">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="
                px-3 py-1 text-sm 
                bg-[#1a2140] border border-[#253056] 
                text-gray-300 rounded-md
              "
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
