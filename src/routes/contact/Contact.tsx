import React from 'react';
import styles from './Contact.module.css';
import Navbar from '../../components/navbar/navbar';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact me!</h1>
      <Navbar />
    </div>
  );
};

export default Contact;
