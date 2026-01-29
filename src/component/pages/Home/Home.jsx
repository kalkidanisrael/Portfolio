
import React from "react";
import './Home.css';

function Home() {
  const projects = [
    {
      title: "Programming Fundamentals - Udacity",
      description: "Completed a foundational programming course covering variables, control structures, functions, and basic algorithms.",
      duration: "8 weeks (Sep 28, 2024 – Nov 23, 2024)",
      image: "/images/udacity-certificate.png", // replace with your certificate image
      link: "https://www.udacity.com/certificate/your-certificate-link" // optional
    },
    
  ];

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Certificate</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

