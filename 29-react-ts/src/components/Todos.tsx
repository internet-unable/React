import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{todos: Todo[]}> = (props) => {
    return (
        <ul>
            {props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    );
}

export default Todos;