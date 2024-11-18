import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function ProjectDetailsPanel({projectTitle}) {
    return (
        <section className="h-screen flex flex-col items-center grow pt-24 pl-10 pr-40">
            <ul>
                <li>
                    <h1>{projectTitle}</h1>
                </li>
                <li>
                    <Button>Delete</Button>
                </li>
            </ul>

            {/* <p>{dueDate}</p> */}
            {/* <p>{desc}</p> */}

            <hr />

            <section>
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