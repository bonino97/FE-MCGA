import React from 'react';
import styles from './TextInput.module.css';

const TextInput = (name, placeholder, label) => {
    <div>
      <label>{label}</label>
      <input name={name} placeholder={placeholder} />
    </div>
};

export default TextInput;
