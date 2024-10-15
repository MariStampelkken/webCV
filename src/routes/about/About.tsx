import React from 'react';
import styles from './About.module.css';
import Navbar from '../../components/navbar/navbar';
import PictureBox from '../../components/pictureBox/pictureBox';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Navbar />
      <h1 className={styles.title}> About me </h1>

        <p className={styles.description1}>
        <b>Hi! My name is Mari,</b> and I'm from the gorgeous town of Otta in Gudbrandsdalen. Currently, I’m studying Informatics at NTNU in Trondheim, and I’ll be finishing my bachelor’s degree in 2025. I have experience with a range of programming languages and tools, including React, TypeScript, JavaScript, Java, CSS, HTML, and Python. And I am always looking to learn new skills.
        </p>
        <p className={styles.description2}>
        <b>I love getting creative.</b> Whether it’s through art, photography, or music to relax, or to use it in combination with my code! I also enjoy being outdoors, and you’ll often find me hiking to recharge or spending time with my friends and family.
        </p>
        <p className={styles.description3}>
        <b>A few fun fact about me:</b> I spent a year in Rome on an exchange program, which not only made me a better programmer but also a devoted pizza enthusiast. I love to travel. I love my cat Liz, seen in the photo below. And I have met Taylor Swift.
        </p>

      <div className={styles.pictures}>
        <PictureBox src="/src/polaroids/polaroid11.JPG" alt="Polaroid" />
        <PictureBox src="/src/polaroids/polaroid15.JPG" alt="Polaroid" />
        <PictureBox src="/src/polaroids/polaroid14.JPG" alt="Polaroid" />
        <PictureBox src="/src/polaroids/polaroid4.JPG" alt="Polaroid" />
      </div>
    </div>
  );
};

export default About;
