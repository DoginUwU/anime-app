import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SearchInput from '../../components/SearchInput';
import styles from './home.styles.module.css';

const HomeLayout: React.FC = () => (
    <>
        <Navbar />
        <div className={styles.titlebar} />
        <div className="flex flex-col p-8 gap-8 ml-[12rem] w-full">
            <SearchInput />
            <Outlet />
        </div>
    </>
);

export default HomeLayout;
