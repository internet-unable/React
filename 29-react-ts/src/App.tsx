import TodosContextProvider from "./store/todos-context";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

export default function App() {
    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}
