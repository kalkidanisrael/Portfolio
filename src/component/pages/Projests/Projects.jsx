import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "BookBet",
      description: "Completed a foundational programming course covering variables, control structures, functions, and basic algorithms.",
    
      image: "/images/udacity-certificate.png", // replace with your project/certificate image
      link: "https://book-bet.vercel.app/Psychology"
    },
    
    
    
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
