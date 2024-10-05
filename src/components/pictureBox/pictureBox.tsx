import React from 'react';
import styles from './PictureBox.module.css';

interface PictureBoxProps {
  src: string;
  alt: string;
}

const PictureBox: React.FC<PictureBoxProps> = ({ src, alt }) => {
  return (
    <div className={styles.pictureBox}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default PictureBox;
