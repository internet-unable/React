import { useState } from 'react';
import Button from '../Elements/Button/Button.jsx';

export default function SideMenu({addProjectHandler, projectsList, projectSelectHandler, selectedProject}) {
    const defaultprojectListItemStyles = 'w-full text-left text-stone-400 px-2 py-1 outline-2 outline-offset-2 outline-stone-100 hover:text-stone-100 hover:bg-stone-600 focus-visible:text-stone-100 focus-visible:bg-stone-600 focus-visible:outline';
    const activeProjectListItemStyles = 'text-stone-100 bg-stone-600';

    return(
        <aside className="h-full w-80 flex flex-col px-8 py-16 bg-stone-900 text-stone-50 rounded-tr-2xl">
            <div className="mb-10">
                <h2 className="text-xl font-bold uppercase mb-8">Your projects</h2>
                <Button
                    isOnDarkBg
                    onClick={addProjectHandler}
                >
                    + Add project
                </Button>
            </div>

            <ul className="p-1 -m-1 overflow-auto space-y-2">
                {projectsList.map(item => {
                    let finalProjectListItemStyles;

                    if (item.projectId === selectedProject) {
                        finalProjectListItemStyles = `${defaultprojectListItemStyles} ${activeProjectListItemStyles}`;
                    } else {
                        finalProjectListItemStyles = defaultprojectListItemStyles;
                    }

                    return (
                        <li key={item.projectId}>
                            <button
                                type="button"
                                className={finalProjectListItemStyles}
                                onClick={() => projectSelectHandler(item.projectId)}
                            >
                                {item.projectTitle}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}