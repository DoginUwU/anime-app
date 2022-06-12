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

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (!value) return;

            navigate(`/search/${value}`);
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [value]);

    return (
        <div className={styles.container}>
            <MagnifyingGlass />
            <input type="text" placeholder="Search" value={value} onChange={handleChangeValue} />
        </div>
    );
};

export default SearchInput;
