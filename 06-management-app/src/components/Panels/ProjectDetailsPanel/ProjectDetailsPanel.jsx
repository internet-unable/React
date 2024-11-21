import { useRef } from 'react';

import Modal from '../../Modal/Modal.jsx';
import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function ProjectDetailsPanel({
    selectedProject,
    selectedProjectTasks,
    deleteProjectHandler,
    addTaskToProjectHandler,
    deleteTaskFromProjectHandler
}) {
    const modal = useRef();
    const taskTitle = useRef();
    const formattedDate = new Date(selectedProject.projectDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    function handleAddTask() {
        if (!taskTitle.current.value.trim()) {
            modal.current.open();
        } else {
            addTaskToProjectHandler({
                projectId: selectedProject.projectId,
                taskId: `${selectedProject.projectId}-t${Math.random()}`,
                taskTitle: taskTitle.current.value.trim()
            });
            taskTitle.current.value = '';
        }
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl text-stone-700 font-bold mb-4">Invalid taks name</h2>
                <p className="text-syone-600 mb-8">Please make sure that you provide a valid value for task input field.</p>
            </Modal>

            <section className="h-full flex flex-col items-center grow py-16 pr-40 overflow-auto">
                <div className="w-full max-w-screen-md">
                    <div className="mb-4">
                        <ul className="w-full flex flex-row justify-between items-center">
                            <li>
                                <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectedProject.projectTitle}</h1>
                            </li>
                            <li>
                                <Button isTypeText onClick={() => deleteProjectHandler(selectedProject.projectId)}>Delete</Button>
                            </li>
                        </ul>

                        <p className="text-stone-400 mb-4">{formattedDate}</p>
                        <p className="text-stone-600 whitespace-pre-wrap">{selectedProject.projectDesc}</p>
                    </div>

                    <hr className="mb-4" />

                    <section>
                        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

                        <div className="flex items-center mb-6 gap-4">
                            <Input
                                containerClasses="w-6/12"
                                stylesType="rounded-outline"
                                ref={taskTitle}
                            />
                            <Button onClick={handleAddTask}>Add task</Button>
                        </div>

                        {!selectedProjectTasks.length && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}

                        {
                            selectedProjectTasks.length > 0 && (
                                <ul className="p-4 space-y-4 bg-stone-100 rounded-md">
                                    {selectedProjectTasks.map(task => {
                                        return (
                                            <li key={task.taskId} className="flex justify-between items-center">
                                                <div>{task.taskTitle}</div>
                                                <Button isTypeText onClick={() => deleteTaskFromProjectHandler(task.taskId)}>Clear</Button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        }
                    </section>
                </div>
            </section>
        </>
    );
}