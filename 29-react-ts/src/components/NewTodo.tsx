import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const input = useRef<HTMLInputElement>(null);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const inputValue = input.current!.value;

        if (inputValue?.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(inputValue);
    };

    return (
        <form className={classes.form} onSubmit={handleFormSubmit}>
            <label htmlFor="new-todo">Todo text</label>
            <input type="text" id="new-todo" ref={input} />
            <button>Add todo</button>
        </form>
    );
};

export default NewTodo;
