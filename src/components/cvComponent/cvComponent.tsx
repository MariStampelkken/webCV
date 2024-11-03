// CV.tsx
import React from 'react';
import { ContactInfo, Skill, Experience, Education, Project } from '../../types';

const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  linkedIn: 'https://www.linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
};

const skills: Skill[] = [
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'TypeScript' },
];

const experiences: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    date: 'Jan 2020 - Present',
    description: 'Developed and maintained the front end of the company’s main product.',
  },
];

const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    graduationYear: '2020',
  },
];

const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio to showcase my projects and skills.',
    link: 'https://github.com/yourusername/portfolio',
  },
];

const CVComponent: React.FC = () => {
  return (
    <div className="cv">
      <header>
        <h1>Your Name</h1>
        <p>Job Title or Short Tagline</p>
      </header>

      <section id="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p>LinkedIn: <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </section>

      <section id="education">
        <h2>Education</h2>
        {education.map((school, index) => (
          <div className="school" key={index}>
            <h3>{school.degree} - {school.institution}</h3>
            <p>{school.graduationYear}</p>
          </div>
        ))}
      </section>

      <section id="experience">
        <h2>Experience</h2>
        {experiences.map((job, index) => (
          <div className="job" key={index}>
            <h3>{job.title} - {job.company}</h3>
            <p>{job.date}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description} <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub link</a></p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CVComponent;
