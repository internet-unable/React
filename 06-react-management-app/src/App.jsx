import { useState } from "react";

import {PROJETS_LIST_BLUEPRINT} from './data.js'
import SideMenu from "./components/SideMenu/SideMenu.jsx";
import NoProjectSelectedPanel from "./components/Panels/NoProjectSelectedPanel/NoProjectSelectedPanel.jsx";
import CreateProjectPanel from "./components/Panels/CreateProjectPanel/CreateProjectPanel.jsx";
import ProjectDetailsPanel from "./components/Panels/ProjectDetailsPanel/ProjectDetailsPanel.jsx";

const DEFAULT_PANEL = 'default';
const CREATING_PROJECT_PANEL = 'creating-project';
const PROJECT_DETAILS_PANEL = 'project-details';

function App() {
    const [activePanel, setActivePanel] = useState(DEFAULT_PANEL);
    const [projectsList, setProjectsList] = useState(PROJETS_LIST_BLUEPRINT);

    function handleAddProjectClick() {
        setActivePanel(CREATING_PROJECT_PANEL);
    }

    function handleCancelProjectCreation() {
        setActivePanel(DEFAULT_PANEL);
    }

    // function handleProjectSelect() {
    //     setActivePanel(PROJECT);
    // }

    return (
        <>
            <SideMenu
                addProjectHandler={handleAddProjectClick}
                projectsList={projectsList}
            />

            {activePanel === DEFAULT_PANEL && <NoProjectSelectedPanel addProjectHandler={handleAddProjectClick} />}
            {activePanel === CREATING_PROJECT_PANEL && <CreateProjectPanel cancelProjectCreationHandler={handleCancelProjectCreation} />}
            {activePanel === PROJECT_DETAILS_PANEL && <ProjectDetailsPanel />}
        </>
    );
}

export default App;
