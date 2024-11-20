import { useRef, useState } from 'react';

import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function ProjectDetailsPanel({
    selectedProject,
    deleteProjectHandler,
    addTaskToProjectHandler,
    deleteTaskFromProjectHandler
}) {
    const taskTitle = useRef();
    const [isTaskValid, setIsTaskValid] = useState(true);
    const formattedDate = new Date(selectedProject.projectDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    function handleDeleteProject() {
        deleteProjectHandler(selectedProject.projectId);
    }

    function handleAddTask() {
        if (!taskTitle.current.value.trim()) {
            setIsTaskValid(false);
        } else {
            addTaskToProjectHandler(selectedProject.projectId, {
                taskId: `${selectedProject.projectId}-t${Math.random()}`,
                taskTitle: taskTitle.current.value.trim()
            });
            setIsTaskValid(true);
            taskTitle.current.value = '';
        }
    }

    function handleDeleteTask(taskId) {
        deleteTaskFromProjectHandler(selectedProject.projectId, taskId);
    }

    return (
        <section className="h-full flex flex-col items-center grow py-16 pr-40 overflow-auto">
            <div className="w-full max-w-screen-md">
                <div className="mb-4">
                    <ul className="w-full flex flex-row justify-between items-center">
                        <li>
                            <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectedProject.projectTitle}</h1>
                        </li>
                        <li>
                            <Button isTypeText onClick={handleDeleteProject}>Delete</Button>
                        </li>
                    </ul>

                    <p className="text-stone-400 mb-4">{formattedDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">{selectedProject.projectDesc}</p>
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
                            <Button isTypeText onClick={handleAddTask}>Add task</Button>
                        </div>

                        <ul className="bg-stone-200 space-y-4 px-4 rounded">
                            {/* {selectedProject.projectTasks && selectedProject.projectTasks.map(task => {
                                return (
                                    <li key={task.taskId} className="flex justify-between items-center first:pt-8 last:pb-8">
                                        <div>{task.taskTitle}</div>
                                        <Button isTypeText onClick={() => handleDeleteTask(task.taskId)}>Clear</Button>
                                    </li>
                                )
                            })} */}
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    );
}