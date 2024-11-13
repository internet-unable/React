import { useState } from "react";

import SideMenu from "./components/SideMenu/SideMenu.jsx";
import NoProjectSelectedPanel from "./components/Panels/NoProjectSelectedPanel/NoProjectSelectedPanel.jsx";
import CreateProjectPanel from "./components/Panels/CreateProjectPanel/CreateProjectPanel.jsx";
import ProjectDetailsPanel from "./components/Panels/ProjectDetailsPanel/ProjectDetailsPanel.jsx";

const DEFAULT = 'default';
const CREATING_PROJECT = 'creating-project';
const PROJECT_DETAILS = 'project-details';

function App() {
    const [activePanel, setActivePanel] = useState(DEFAULT);

    function handleAddProjectClick() {
        setActivePanel(CREATING_PROJECT);
    }

    // function handleProjectSelect() {
    //     setActivePanel(PROJECT);
    // }

    return (
        <>
            <SideMenu addProjectHandler={handleAddProjectClick} />

            {activePanel === DEFAULT && <NoProjectSelectedPanel addProjectHandler={handleAddProjectClick} />}
            {activePanel === CREATING_PROJECT && <CreateProjectPanel />}
            {activePanel === PROJECT_DETAILS && <ProjectDetailsPanel />}
        </>
    );
}

export default App;
