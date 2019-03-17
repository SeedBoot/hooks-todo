import React from "react";
import styles from './TodoListItem.css';

export const TodoListItem = ({ markDone, todo: { task, completed }, index }) => {
    const handleDone = e => markDone({
        completed: e.target.checked,
        index
    });

    return (
        <li>
            <div>
                <label className={ completed ? styles.complete : '' }>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    onClick={ e => handleDone(e) }
                />
                    { task }
                </label>
            </div>
        </li>
    )
};
