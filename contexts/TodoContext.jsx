import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Ir ao supermercado', done: false },
        { id: 2, title: 'Ir na acamia', done: false },
        { id: 3, title: 'Passear com o cachorro', done: true },
        { id: 4, title: 'Aprender React Native', done: false },
    ]);

    const addTodo = (title) => {
        const newTodo = { id: todos.length + 1, title: title, done: false };
        setTodos([newTodo, ...todos]);
    }

    const removeTodo = (todo) => {
        const index = todos.indexOf(todo);
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <TodoContext.Provider value={{ todos, removeTodo, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;