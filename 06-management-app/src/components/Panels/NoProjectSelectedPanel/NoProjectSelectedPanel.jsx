import Button from '../../Elements/Button/Button.jsx';
import imgPath from '../../../assets/no-projects.png';

export default function NoProjectSelectedPanel({addProjectHandler}) {
    return(
        <section className="h-full flex flex-col justify-center items-center grow">
            <img className="w-16 h-16 object-contain mb-4" src={imgPath} alt="" />
            <h2 className="text-xl text-stone-500 font-bold mb-4">No Project Selected</h2>
            <p className="text-syone-400 mb-8">Select a project or get started with a new one</p>
            <Button onClick={addProjectHandler}>Create new project</Button>
        </section>
    );
}