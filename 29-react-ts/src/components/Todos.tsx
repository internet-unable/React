import React from "react";

const Todos: React.FC<{todos: string[]}> = (props) => {
    return (
        <ul>
            {props.todos.map(todo => <li>{todo}</li>)}
        </ul>
    );
}

export default Todos;