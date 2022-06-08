import React, { createElement } from 'react';
import { IconProps } from 'phosphor-react';
import Button from '../Button';
import styles from './styles.module.css';
import { menu } from './helper';

const Navbar: React.FC = () => (
    <div className={styles.container}>
        <img
            src="https://cdn.discordapp.com/attachments/880778290170834944/983905448602263622/43f4e4166f1c654f1d401246a8f5f013.jpg"
            alt="logo"
            className={styles.logo}
        />
        <div className={styles.content}>
            {menu.map((item) => (
                <div className={styles.nav} key={item.name}>
                    <h1>{item.name}</h1>
                    <ul>
                        {item.items.map((subItem) => (
                            <li>
                                {createElement<IconProps>(subItem.icon, { weight: 'fill' })}
                                {subItem.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className={styles.footer}>
            <Button>Settings</Button>
            <p>Anime-App v0.01</p>
        </div>
    </div>
);

export default Navbar;
