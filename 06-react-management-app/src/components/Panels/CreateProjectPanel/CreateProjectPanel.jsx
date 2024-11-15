import { useRef, useState } from "react";

import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function CreateProjectPanel({cancelProjectCreationHandler, saveProjectHandler}) {
    const projectTitleElem = useRef();
    const projectDecsElem = useRef();
    const projectDateElem = useRef();
    const [isProjectTitleValid, setIsProjectTitleValid] = useState(true);

    function handleValidation() {
        if (!projectTitleElem.current.value.trim()) {
            setIsProjectTitleValid(false);
        } else {
            // saveProjectHandler()
        }
    }

    return(
        <section className="h-screen flex flex-col items-center grow pt-24 pl-10 pr-40">
            <ul className="w-full flex justify-end items-center mb-6">
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

            <form className="w-full">
                <Input
                    id="title"
                    label="Title"
                    ref={projectTitleElem}
                    stylesType='bottom-outline'
                    validateStyles
                    isInputValidStyles={isProjectTitleValid}
                />
                <Input
                    id="desc"
                    label="Description"
                    type="textarea"
                    stylesType='bottom-outline'
                />
                <Input
                    id="date"
                    label="Due date"
                    type="date"
                    stylesType='bottom-outline'
                />
            </form>
        </section>
    );
}