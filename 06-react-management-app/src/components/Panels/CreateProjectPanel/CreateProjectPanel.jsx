import Button from "../../Elements/Button/Button.jsx";
import Input from "../../Elements/Input/Input.jsx";

export default function CreateProjectPanel() {
    return(
        <section className="h-screen flex flex-col items-center grow pt-24 pl-10 pr-40">
            <ul className="w-full flex justify-end items-center mb-6">
                <li>
                    <Button btnTypeText={true}>Cancel</Button>
                </li>
                <li>
                    <Button>Save</Button>
                </li>
            </ul>

            <form className="w-full">
                <Input id="title" label="Title" />
                <Input id="desc "label="Description" type="textarea" />
                <Input id="date "label="Due date" type="date" />
            </form>
        </section>
    );
}