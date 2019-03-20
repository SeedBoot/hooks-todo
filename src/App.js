import React, { useState, useEffect } from 'react';
import { Input } from './components/Input';
import { TodoListItem } from './components/TodoListItem';
import { StringyBtn } from './components/util';

import styles from './App.css';

const App = () => {
    const [todos, setTodo] = useState([]);

    const markDone = ({ completed, index }) =>
        setTodo(prevState => prevState.map((item, i) =>
            i === index ? { ...item, completed } : item));

    const deleteTodo = ({ index }) =>
        setTodo(prevState => prevState
            .filter((item, i) => i !== index));

    const addTodo = task => setTodo([
        {
            task,
            completed: false,
            markDone,
            deleteTodo
        },
        ...todos
    ]);

    useEffect(() => {
        if (todos.length > 0) {
            const done = todos.filter(todo => todo.completed).length;

            document.title = (todos.length - done) > 0
                ? `${todos.length - done} to do`
                : `You're all done!`;
        }
        else {
            document.title = 'What do you need to do?';
        }
    }, [todos]);

    return (
        <div className={ styles.todoMain }>
            <StringyBtn log={ todos }/>
            <header>
                <h1>Oli's funky to-do list</h1>
            </header>
            <main>
                <Input addTodo={ addTodo } />
                <ul className={ styles.list }>
                    {todos.map((todo, index) =>
                        <TodoListItem
                            todo={ todo }
                            index={ index }
                            key={`${index}-${todo.task}`}
                        /> )}
                </ul>
            </main>
        </div>
    )
}

export default App;
