// CV.tsx
import React from 'react';
import { ContactInfo, Skill, Experience, Education, Project } from '../../types';
import ProfilePicture from "../../illustrations/CVPicture.jpeg";
import styles from './cvComponent.module.css';

// const contactInfo: ContactInfo = {
//   email: 'maristamp@hotmail.no',
//   linkedIn: 'https://www.linkedin.com/in/mari-stampeløkken-017901238/',
//   github: 'https://github.com/MariStampelkken',
// };

const skills: Skill[] = [
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'JavaScript' },
  { name: 'CSS' },
  { name: 'HTML' },
  { name: 'Git' },
  { name: 'Database (MySQL, MongoDB, Neo4j)'},
  { name: 'REST API, GraphQL' },
];

const experiences: Experience[] = [
  {
    title: 'Waitress',
    company: 'Thon Partner Hotel Otta',
    date: 'Sept 2015 - dd',
    description: ''
  },
  {
    title: 'Field Recruiter (feltverver)',
    company: 'Stiftelsen Norsk Luftambulanse',
    date: 'March 2022 - June 2022',
    description:
      '',
  },
];

const education: Education[] = [
  {
    degree: 'Bachelor in Informatics',
    institution: 'NTNU Gløshaugen',
    graduationYear: 'Aug 2021 - Present',
  },
  {
    degree: 'Exchange program',
    institution: 'La Sapienza, Roma',
    graduationYear: 'Sept 2022 - July 2023',
  },
  {
    degree: 'One-Year Psychology Program',
    institution: 'NTNU Dragvoll',
    graduationYear: 'Aug 2020 - June 2021',
  },
  {
    degree: 'Bachelor in Radiography',
    institution: 'NTNU Øya',
    graduationYear: 'Aug 2019 - June 2020',
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
      <header className={styles.header}>
        <div className={styles.headerText}>
          <h1>Mari Stampeløkken </h1>
          <p>Developer | Informatics student </p>
        </div>

        <div className={styles.profilePic}>
          <img src={ProfilePicture} alt="Profile picture of Mari" className={styles.pp}/>
        </div>
      </header>

      {/* <section id="contact-info">
        <h2> </h2>
        <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p>LinkedIn: <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </section> */}

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

      {/* <section id="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description} <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub link</a></p>
          </div>
        ))}
      </section> */}
    </div>
  );
};

export default CVComponent;
