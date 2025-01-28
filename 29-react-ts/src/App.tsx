import { useState } from "react";

import Todo from "./models/todo";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([
        new Todo("Learn React"),
        new Todo("Learn TypeScript")
    ]);

    const handleAddTodo = (value: string) => {
        const newTodo = new Todo(value);
        setTodos(prevTodos => prevTodos.concat(newTodo));
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={handleAddTodo} />
            <Todos todos={todos} />
        </div>
    );
}
