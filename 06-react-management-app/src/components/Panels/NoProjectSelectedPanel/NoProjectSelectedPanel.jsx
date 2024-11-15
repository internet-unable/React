import Button from "../../Elements/Button/Button.jsx";
const imgPath = './public/logo.png';

export default function NoProjectSelectedPanel({addProjectHandler}) {
    return(
        <section className="h-screen flex flex-col justify-center items-center grow">
            <img className="w-16 mb-4" src={imgPath} alt="" />
            <h2 className="text-xl font-semibold mb-4">No Project Selected</h2>
            <p className="mb-8">Select a project or get started with a new one</p>
            <Button onClick={addProjectHandler}>Create new project</Button>
        </section>
    );
}