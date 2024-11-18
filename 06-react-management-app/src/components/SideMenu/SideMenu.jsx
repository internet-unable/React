import Button from '../Elements/Button/Button.jsx';

export default function SideMenu({addProjectHandler, projectsList}) {
    return(
        <aside className="flex flex-col h-screen w-80 bg-black rounded-tr-2xl px-10 py-20">
            <div>
                <h2 className="text-2xl font-semibold text-white uppercase mb-10">Your projects</h2>
                <Button
                    className="mb-10"
                    onClick={addProjectHandler}
                    btnTypeOnDarkBg={true}
                >
                    + Add project
                </Button>
            </div>
            <ul className="overflow-auto">
                {projectsList.map(item => (
                    <li
                        key={item.projectId}
                        className="text-neutral-400 px-2 py-1 mb-1 cursor-pointer hover:text-neutral-300 hover:bg-stone-700"
                    >
                        {item.projectTitle}
                    </li>
                ))}
            </ul>
        </aside>
    );
}