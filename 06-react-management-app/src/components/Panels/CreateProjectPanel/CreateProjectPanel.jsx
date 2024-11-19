import { useRef, useState } from "react";

import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function CreateProjectPanel({cancelProjectCreationHandler, saveProjectHandler}) {
    const projectTitleElem = useRef();
    const projectDescElem = useRef();
    const projectDateElem = useRef();
    const [isProjectTitleValid, setIsProjectTitleValid] = useState(true);

    function handleValidation() {
        if (!projectTitleElem.current.value.trim()) {
            setIsProjectTitleValid(false);
        } else {
            setIsProjectTitleValid(true);
            saveProjectHandler({
                projectId: `p${Math.random()}`,
                projectTitle: projectTitleElem.current.value.trim(),
                projectDesc: projectDescElem.current.value.trim(),
                projectDate: projectDateElem.current.value.trim()
            });
        }
    }

    return(
        <section className="h-full flex flex-col items-center grow py-24 pl-10 pr-40 overflow-auto">
            <form className="w-full max-w-screen-md">
                <ul className="flex justify-end items-center mb-6 space-x-4">
                    <li>
                        <Button
                            btnTypeText={true}
                            onClick={cancelProjectCreationHandler}
                        >
                            Cancel
                        </Button>
                    </li>
                    <li>
                        <Button onClick={handleValidation}>Save</Button>
                    </li>
                </ul>

                <div className="space-y-4">
                    <Input
                        containerClasses="flex flex-col"
                        label="Title"
                        id="title"
                        stylesType="bottom-outline"
                        isInputValid={isProjectTitleValid}
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
            </form>
        </section>
    );
}