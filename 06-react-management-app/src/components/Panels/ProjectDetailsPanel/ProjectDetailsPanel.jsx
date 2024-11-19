import { useRef, useState } from 'react';

import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function ProjectDetailsPanel({ selectedProject, addTaskToProject, deleteTaskFromProject }) {
    const taskTitle = useRef();
    const [isTaskValid, setIsTaskValid] = useState(true);

    function handleAddTaskClick() {
        if (!taskTitle.current.value.trim()) {
            setIsTaskValid(false);
        } else {
            addTaskToProject(selectedProject.projectId, {
                taskId: `${selectedProject.projectId}-t${Math.random()}`,
                taskTitle: taskTitle.current.value.trim()
            });
            setIsTaskValid(true);
            taskTitle.current.value = '';
        }
    }

    function handleClearClick(taskId) {
        deleteTaskFromProject(selectedProject.projectId, taskId);
    }

    return (
        <section className="h-full flex flex-col items-center grow py-16 pl-10 pr-40 overflow-auto">
            <div className="w-full max-w-screen-md">
                <div className="mb-4">
                    <ul className="flex flex-row justify-between items-center w-full">
                        <li>
                            {selectedProject.projectTitle && <h1 className="text-2xl font-semibold mb-2">{selectedProject.projectTitle}</h1>}
                        </li>
                        <li>
                            <Button btnTypeText>Delete</Button>
                        </li>
                    </ul>

                    {selectedProject.projectDate && <p className="text-stone-500 mb-4">{new Date(selectedProject.projectDate).toDateString()}</p>}
                    {selectedProject.projectDesc && <p>{selectedProject.projectDesc}</p>}
                </div>

                <hr className="mb-4" />

                <section>
                    <h2 className="text-xl font-semibold mb-4">Tasks</h2>
                    <div>
                        <div className="flex items-center mb-6 space-x-4">
                            <Input
                                containerClasses="w-6/12"
                                stylesType="rounded-outline"
                                isInputValid={isTaskValid}
                                ref={taskTitle}
                            />
                            <Button btnTypeText onClick={handleAddTaskClick}>Add task</Button>
                        </div>

                        <ul className="bg-stone-200 space-y-4 px-4 rounded">
                            {selectedProject.projectTasks && selectedProject.projectTasks.map(task => {
                                return (
                                    <li key={task.taskId} className="flex justify-between items-center first:pt-8 last:pb-8">
                                        <div>{task.taskTitle}</div>
                                        <Button btnTypeText onClick={() => handleClearClick(task.taskId)}>Clear</Button>
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