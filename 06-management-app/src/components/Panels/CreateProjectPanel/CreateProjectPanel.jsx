import { useRef } from "react";

import Modal from "../../Modal/Modal.jsx";
import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function CreateProjectPanel({cancelProjectCreationHandler, saveProjectHandler}) {
    const modal = useRef();
    const projectTitleElem = useRef();
    const projectDescElem = useRef();
    const projectDateElem = useRef();

    function handleValidation() {
        const projectTitleElemValue = projectTitleElem.current.value.trim();
        const projectDescElemValue = projectDescElem.current.value.trim();
        const projectDateElemValue = projectDateElem.current.value.trim();

        if (!projectTitleElemValue ||
            !projectDescElemValue ||
            !projectDateElemValue
        ) {
            modal.current.open();
        } else {
            saveProjectHandler({
                projectId: `p${Math.random()}`,
                projectTitle: projectTitleElemValue,
                projectDesc: projectDescElemValue,
                projectDate: projectDateElemValue
            });
        }
    }

    return(
        <>
            <Modal ref={modal}>
                <h2 className="text-xl text-stone-700 font-bold mb-4">Invalid input</h2>
                <p className="text-syone-600 mb-8">Please make sure that you provide a valid value for every input field.</p>
            </Modal>

            <section className="h-full flex flex-col items-center grow py-16 pr-40 overflow-auto">
                <div className="w-full max-w-screen-md">
                    <menu className="flex justify-end items-center mb-6 gap-4">
                        <li>
                            <Button
                                isTypeText
                                onClick={cancelProjectCreationHandler}
                            >
                                Cancel
                            </Button>
                        </li>
                        <li>
                            <Button onClick={handleValidation}>Save</Button>
                        </li>
                    </menu>

                    <div className="space-y-4">
                        <Input
                            containerClasses="flex flex-col"
                            label="Title"
                            id="title"
                            stylesType="bottom-outline"
                            ref={projectTitleElem}
                        />
                        <Input
                            containerClasses="flex flex-col"
                            label="Description"
                            id="desc"
                            type="textarea"
                            stylesType="bottom-outline"
                            ref={projectDescElem}
                        />
                        <Input
                            containerClasses="flex flex-col"
                            label="Due date"
                            id="date"
                            type="date"
                            stylesType="bottom-outline"
                            ref={projectDateElem}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}