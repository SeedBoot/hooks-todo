import React, { useState } from 'react';

import styles from './Input.css';

export const Input = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (text.length > 0) {
            addTodo(text);
            setText('');
        }
    }

    return (
        <form className={styles.form} onSubmit={ e => handleSubmit(e) }>
            <input
                value={text}
                onChange={ e => setText(e.target.value) } />
            <button>Add</button>
        </form>
    )
}
