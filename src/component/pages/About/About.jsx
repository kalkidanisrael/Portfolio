import React from "react";
import profilePic from './image.png'; // Replace with your photo
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <img src={profilePic} alt="Kalkidan Israel" className="profile-pic" />
        <div className="about-text">
          <h1>Kalkidan Israel</h1>
          <h3>Frontend Developer & UI/UX Designer</h3>
          <p>
            I create clean, modern, and user-friendly interfaces using React,
            HTML, CSS, and JavaScript. I design intuitive user experiences that
            delight users and bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

