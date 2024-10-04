import React from 'react';
import styles from './About.module.css';
import Navbar from '../../components/navbar/navbar';

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}> About me! </h1>
            <Navbar />
        </div>
    );
};

export default About;