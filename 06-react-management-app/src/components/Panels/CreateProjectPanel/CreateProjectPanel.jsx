import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";
import TextArea from "../../Elements/TextArea/TextArea.jsx";

export default function CreateProjectPanel() {
    return(
        <section id="create-project-panel">
            <ul>
                <li>
                    <Button>Cancel</Button>
                </li>
                <li>
                    <Button>Save</Button>
                </li>
            </ul>

            <form>
                <div>
                    <Input label="Title" />
                </div>

                <div>
                    <TextArea label="Description" />
                </div>

                <div>
                    <Input label="Due date" type="date" />
                </div>
            </form>
        </section>
    );
}