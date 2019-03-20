import React from "react";
import styles from './TodoListItem.css';

export const TodoListItem = ({
    todo: { task, completed, markDone, deleteTodo },
    index
}) => {
    const handleDone = e => markDone({
        completed: e.target.checked,
        index
    });

    return (
        <li className={ styles.listItem }>
            <div className={ styles.todoContainer }>
                <label className={ completed ? styles.complete : '' }>
                    <input
                        type="checkbox"
                        className={ styles.checkbox }
                        defaultChecked={ completed }
                        onClick={ e => handleDone(e) }
                    />
                    { task }
                </label>
                <button onClick={() => deleteTodo({ index })}>Delete</button>
            </div>
        </li>
    )
};
