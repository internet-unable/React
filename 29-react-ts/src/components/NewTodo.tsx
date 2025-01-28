import React, { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (inputValue: string) => void}> = (props) => {
    const input = useRef<HTMLInputElement>(null);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const inputValue = input.current!.value;

        if (inputValue?.trim().length === 0) {
            return;
        }

        props.onAddTodo(inputValue);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="new-todo">Todo text</label>
            <input type="text" id="new-todo" ref={input} />
            <button>Add todo</button>
        </form>
    );
};

export default NewTodo;
