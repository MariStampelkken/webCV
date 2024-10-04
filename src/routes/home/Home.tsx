import React from 'react';
import styles from './Home.module.css'; 
import Portrait from '/src/illustrations/Portrait.jpg';
import Navbar from '../../components/navbar/navbar';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Mari</h1>
            <img src={Portrait} alt="Portrait" className={styles.illustration} />
            <Navbar />
        </div>
    );
};

export default Home;