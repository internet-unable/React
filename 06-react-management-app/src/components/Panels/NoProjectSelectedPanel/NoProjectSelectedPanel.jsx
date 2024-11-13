import Button from "../../Elements/Button/Button.jsx";

export default function NoProjectSelectedPanel() {
    return(
        <section id="no-project-selected-panel">
            <img src="" alt="" />
            <h3>No Project Selected</h3>
            <p>Select a project or get started with a new one</p>
            <Button>Create new project</Button>
        </section>
    );
}