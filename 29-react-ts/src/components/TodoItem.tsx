import React, { useContext } from "react";

import { TodosContext } from "../store/todos-context";

import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
    text: string;
    id: string;
}> = (props) => {
    const todosCtx = useContext(TodosContext);

    return (
        <li className={classes.item}>
            <div>{props.text}</div>
            <button onClick={() => todosCtx.deleteTodo(props.id)}>
                Remove
            </button>
        </li>
    );
};

export default TodoItem;
