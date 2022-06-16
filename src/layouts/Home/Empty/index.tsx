import React from 'react';
import styles from './styles.module.css';

const Empty: React.FC = () => (
    <div className={styles.container}>
        <img
            src="https://res.cloudinary.com/doginuwu/image/upload/v1655337151/76acf2613cd00198554521e2784f59ad_rsrymh.gif"
            alt="Sorry, no data"
        />
        <div className={styles.content}>
            <p>Looks like there&apos;s nothing to show here... come back later</p>
        </div>
    </div>
);

export default Empty;
