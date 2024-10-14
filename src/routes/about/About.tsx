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
          ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe earum maiores corrupti doloribus tenetur architecto accusantium eligendi delectus natus quia quidem facilis dolores magni deserunt minima, impedit soluta quasi fugiat.
        </p>
        <p className={styles.description2}>
          ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe earum maiores corrupti doloribus tenetur architecto accusantium eligendi delectus natus quia quidem facilis dolores magni deserunt minima, impedit soluta quasi fugiat.
        </p>
        <p className={styles.description1}>
          ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe earum maiores corrupti doloribus tenetur architecto accusantium eligendi delectus natus quia quidem facilis dolores magni deserunt minima, impedit soluta quasi fugiat.
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
