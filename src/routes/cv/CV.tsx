import React from 'react';
import styles from './CV.module.css';
import Navbar from '../../components/navbar/navbar';
import CVComponent from '../../components/cvComponent/cvComponent';

const CV: React.FC = () => {
  return (
    <div className={styles.CV}>
      <h1 className={styles.title}>My CV</h1>
      <Navbar />
      <CVComponent />
    </div>
  );
};

export default CV;
