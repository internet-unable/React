import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function ProjectDetailsPanel({title, dueDate, desc}) {
    return (
        <section id="project-panel">
            <ul>
                <li>
                    <h1>{title}</h1>
                </li>
                <li>
                    <Button>Delete</Button>
                </li>
            </ul>

            <p>{dueDate}</p>
            <p>{desc}</p>

            <hr />

            <section id="project-panel">
                <h2>Tasks</h2>
                <div>
                    <div>
                        <Input />
                        <Button>Add task</Button>
                    </div>
                    <ul>
                        <li>
                            <span>Learn the basics</span>
                            <Button>Clear</Button>
                        </li>
                        <li>
                            <span>Learn advanced concepts</span>
                            <Button>Clear</Button>
                        </li>
                        <li>
                            <span>Practice, practice, practice</span>
                            <Button>Clear</Button>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}