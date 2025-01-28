import React from "react";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
    text: string;
    id: string;
    onDeleteTodo: (id: string) => void;
}> = (props) => {
    return (
        <li className={classes.item}>
            <div>{props.text}</div>
            <button onClick={() => props.onDeleteTodo(props.id)}>Remove</button>
        </li>
    );
};

export default TodoItem;
