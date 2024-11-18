import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function ProjectDetailsPanel({projectTitle, projectDesc, projectDate, projectTasks}) {
    return (
        <section className="h-screen flex flex-col items-center grow pt-16 pl-10 pr-40">
            <div className="w-full max-w-screen-md">
                <div className="mb-4">
                    <ul className="flex flex-row justify-between items-center w-full">
                        <li>
                            {projectTitle && <h1 className="text-2xl font-semibold mb-2">{projectTitle}</h1>}
                        </li>
                        <li>
                            <Button btnTypeText>Delete</Button>
                        </li>
                    </ul>

                    {projectDate && <p className="text-stone-500 mb-4">{new Date(projectDate).toDateString()}</p>}
                    {projectDesc && <p>{projectDesc}</p>}
                </div>

                <hr className="mb-4" />

                <section>
                    <h2 className="text-xl font-semibold mb-4">Tasks</h2>
                    <div>
                        <div className="flex items-center mb-6 space-x-4">
                            <Input containerClasses="w-6/12" stylesType="rounded-outline" />
                            <Button btnTypeText>Add task</Button>
                        </div>

                        <ul className="bg-stone-200 space-y-4 px-4 rounded">
                            {projectTasks.map(task => {
                                return (
                                    <li key={task.taskId} className="flex justify-between items-center first:pt-8 last:pb-8">
                                        <div>{task.taskTitle}</div>
                                        <Button btnTypeText>Clear</Button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    );
}