import React from 'react';
import styles from './CV.module.css';
import Navbar from '../../components/navbar/navbar';

const CV: React.FC = () => {
    return (
        <div className={styles.CV}>
            <h1 className={styles.title}>My CV!</h1>
            <Navbar />
        </div>
    );
};

export default CV;