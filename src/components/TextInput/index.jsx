import React from 'react';

import styles from './index.module.css';

const TextInput = ({ type = 'text', placeholder, name, onChange }) => {
    console.log(placeholder);
    return <input className={styles.input} type={type} placeholder={placeholder} name={name} />;
};

export default TextInput;
