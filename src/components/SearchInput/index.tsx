import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import styles from './styles.module.css';

const SearchInput: React.FC = () => (
    <div className={styles.container}>
        <MagnifyingGlass />
        <input type="text" placeholder="Search" />
    </div>
);

export default SearchInput;
