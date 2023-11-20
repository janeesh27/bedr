import { useState } from 'react';

import styles from './index.module.css';

const Hamburger = ({ onClick }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`${styles.hamburger} ${open && styles.open}`}
            onClick={() => {
                setOpen(!open);
                onClick();
            }}>
            <div class={styles.bar}></div>
            <div class={styles.bar}></div>
            <div class={styles.bar}></div>
        </div>
    );
};

export default Hamburger;
