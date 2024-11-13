import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function CreateProjectPanel() {
    return(
        <section className="h-screen">
            <ul>
                <li>
                    <Button btnType="text">Cancel</Button>
                </li>
                <li>
                    <Button>Save</Button>
                </li>
            </ul>

            <form>
                <Input label="Title" />
                <Input label="Description" type="textarea" />
                <Input label="Due date" type="date" />
            </form>
        </section>
    );
}