import Todo from "./models/todo";

import Todos from "./components/Todos";
import "./App.css";

export default function App() {
    const todos = [
        new Todo("Learn React"),
        new Todo("Learn TypeScript")
    ];

    return (
        <div className="App">
            <Todos todos={todos} />
        </div>
    );
}
