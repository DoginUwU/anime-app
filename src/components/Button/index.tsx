import React, { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => <button className={styles.button} {...props} />;

export default Button;
