import React from 'react';
import styles from './styles.module.css';

const Loading: React.FC = () => (
    <div className={styles.container}>
        <img src="https://res.cloudinary.com/doginuwu/image/upload/v1655045084/loading_ta2osi.gif" alt="loading" />
    </div>
);

export default Loading;
