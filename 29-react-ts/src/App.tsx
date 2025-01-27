import Todos from "./components/Todos";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <Todos todos={["Learn React", "Learn TypeScript"]} />
        </div>
    );
}
