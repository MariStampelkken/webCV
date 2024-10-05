import React from 'react';
import styles from './About.module.css';
import Navbar from '../../components/navbar/navbar';
import PictureBox from '../../components/pictureBox/pictureBox';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}> About me </h1>
      <Navbar />

    <div className={styles.pictures}>
      <PictureBox src="/src/polaroids/polaroid2.JPG" alt="Polaroid" />
      <PictureBox src="/src/polaroids/polaroid1.JPG" alt="Polaroid" />
      <PictureBox src="/src/polaroids/polaroid3.JPG" alt="Polaroid" />
      <PictureBox src="/src/polaroids/polaroid4.JPG" alt="Polaroid" />
      {/* <PictureBox src="/src/polaroids/polaroid5.JPG" alt="Polaroid" />
      <PictureBox src="/src/polaroids/polaroid6.JPG" alt="Polaroid" />
      <PictureBox src="/src/polaroids/polaroid7.JPG" alt="Polaroid" />
      <PictureBox src="/src/polaroids/polaroid8.JPG" alt="Polaroid" /> */}
      </div>
    </div>
  );
};

export default About;
