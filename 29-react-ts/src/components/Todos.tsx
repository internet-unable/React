import React from "react";
import Todo from "../models/todo";

import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ todos: Todo[]; onDeleteTodo: (id: string) => void }> = (
    props
) => {
    return (
        <ul className={classes.todos}>
            {props.todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    id={todo.id}
                    onDeleteTodo={props.onDeleteTodo.bind(null, todo.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
