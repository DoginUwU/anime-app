import { MagnifyingGlass } from 'phosphor-react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const SearchInput: React.FC = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSearch = () => {
        if (!value) return;

        navigate(`/search/${value}`);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearch();
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(handleSearch, 10000);

        return () => clearTimeout(delayDebounceFn);
    }, [value]);

    return (
        <div className={styles.container}>
            <MagnifyingGlass />
            <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={handleChangeValue}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
};

export default SearchInput;
