import React, { useState, useEffect } from 'react';
import { Input } from './components/Input';
import { TodoListItem } from './components/TodoListItem';
import {StringyBtn } from './components/util';

const App = () => {
    const [todos, setTodo] = useState([]);

    useEffect(() => {
        if (todos.length > 0) {
            const done = todos.filter(todo => todo.completed).length;
            document.title = (todos.length - done) > 0
                ? `${todos.length - done} to do`
                : `You're all done!`;
        } else {
            document.title = 'What do you need to do?';
        }
    });

    const addTodo = task => setTodo([
        { task, completed: false },
        ...todos
    ]);

    const markDone = ({ completed, index }) =>
        setTodo(prevState => prevState.map((item, i) =>
            i === index ? { ...item, completed } : item));

    return (
        <>
        <header>
            <h1>Oli's funky to-do list</h1>
        </header>
        <main>
            <Input addTodo={ addTodo } />

            <StringyBtn log={todos}/>

            <ul>
                {todos.map((todo, index) =>
                    <TodoListItem
                        markDone={ markDone }
                        todo={ todo }
                        index={ index }
                        key={`${index}`}
                    /> )}
            </ul>
        </main>
        </>
    )
}

export default App;
