import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ScrollToTop from '../../components/ScrollToTop';
import SearchInput from '../../components/SearchInput';
import styles from './home.styles.module.css';

const HomeLayout: React.FC = () => (
    <div className={styles.main}>
        <Navbar />
        <ScrollToTop />
        <div className={styles.background} />
        <div className={styles.titlebar} />
        <div className={styles.content}>
            <SearchInput />
            <Outlet />
        </div>
    </div>
);

export default HomeLayout;
