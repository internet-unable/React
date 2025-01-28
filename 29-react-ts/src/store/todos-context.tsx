import React, { useState } from "react";

import Todo from "../models/todo";

type TodosContext = {
    items: Todo[];
    addTodo: (value: string) => void;
    deleteTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContext>({
    items: [],
    addTodo: (value: string) => {},
    deleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([
        new Todo("Learn React"),
        new Todo("Learn TypeScript"),
    ]);

    const handleAddTodo = (value: string) => {
        const newTodo = new Todo(value);
        setTodos((prevTodos) => prevTodos.concat(newTodo));
    };

    const handleDeleteTodo = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    const contextValue: TodosContext = {
        items: todos,
        addTodo: handleAddTodo,
        deleteTodo: handleDeleteTodo,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;