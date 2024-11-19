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
    const [selectedProjectId, setSelectedProjectId] = useState();

    function handleAddProjectClick() {
        setActivePanel(CREATING_PROJECT_PANEL);
    }

    function handleCancelProjectCreationClick() {
        setActivePanel(DEFAULT_PANEL);
    }

    function handleSaveProjectClick(newProject) {
        setProjectsList(prevList => {
            setActivePanel(DEFAULT_PANEL);

            return [
                ...prevList,
                newProject
            ];
        });
    }

    function handleProjectSelect(projectId) {
        setSelectedProjectId(projectId);
        setActivePanel(PROJECT_DETAILS_PANEL);
    }

    function handleAddTaskToProject(projectId, projectTask) {
        setProjectsList(prevList => {
            const deepClone = structuredClone(prevList);
            const currentProject = deepClone.find(item => item.projectId === projectId);

            if (currentProject.projectTasks) {
                currentProject.projectTasks.push(projectTask)
            } else {
                currentProject.projectTasks = [projectTask];
            }

            return deepClone;
        });
    }

    function handleDeleteTaskFromProject(projectId, taskId) {
        setProjectsList(prevList => {
            const deepClone = structuredClone(prevList);
            const currentProject = deepClone.find(item => item.projectId === projectId);
            const currentTask = currentProject.projectTasks.find(item => item.taskId === taskId);
            const indexOfCurrentTask = currentProject.projectTasks.indexOf(currentTask);

            currentProject.projectTasks.splice(indexOfCurrentTask, 1);

            return deepClone;
        });
    }

    return (
        <>
            <SideMenu
                addProjectHandler={handleAddProjectClick}
                projectsList={projectsList}
                projectSelectHandler={handleProjectSelect}
            />

            {
                activePanel === DEFAULT_PANEL && (
                    <NoProjectSelectedPanel addProjectHandler={handleAddProjectClick} />
                )
            }

            {
                activePanel === CREATING_PROJECT_PANEL &&
                (<CreateProjectPanel
                    cancelProjectCreationHandler={handleCancelProjectCreationClick}
                    saveProjectHandler={handleSaveProjectClick}
                />)
            }

            {
                activePanel === PROJECT_DETAILS_PANEL && (
                    <ProjectDetailsPanel
                        selectedProject={projectsList.find(item => item.projectId === selectedProjectId)}
                        addTaskToProject={handleAddTaskToProject}
                        deleteTaskFromProject={handleDeleteTaskFromProject}
                    />
                )
            }
        </>
    );
}

export default App;
