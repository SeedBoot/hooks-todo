import React, { useState } from 'react';

export const Input = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <form onSubmit={ e => handleSubmit(e) }>
            <input
                value={text}
                onChange={ e => setText(e.target.value) } />
            <button>Add</button>
        </form>
    )
}
