import React from 'react';
import styles from './Contact.module.css';
import Navbar from '../../components/navbar/navbar';

const contactInfo = {
  email: 'maristamp@hotmail.no',
  linkedIn: 'https://www.linkedin.com/in/mari-stampeløkken-017901238/',
  github: 'https://github.com/MariStampelkken',
};

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact me</h1>
      <Navbar />

      <div className={styles.contactInfo}>
        <ul className={styles.contactList}>
            <li>
              <strong>Email: </strong>
              <a href={`mailto:${contactInfo.email}`} className={styles.link}>
                {contactInfo.email}
              </a>
            </li>
            <li>
              <strong>LinkedIn: </strong>
              <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer" className={styles.link}>
                LinkedIn Profile
              </a>
            </li>
            <li>
              <strong>GitHub: </strong>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                GitHub Profile
              </a>
            </li>
          </ul>
      </div>

      <img src="src/illustrations/LizWithScarf.png" alt="Illustration of Liz" className={styles.illustrationLiz} />
    </div>
  );
};

export default Contact;
