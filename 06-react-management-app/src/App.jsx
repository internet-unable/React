import { useState } from "react";

import {PROJETCS_LIST_BLUEPRINT} from './data.js'
import SideMenu from "./components/SideMenu/SideMenu.jsx";
import NoProjectSelectedPanel from "./components/Panels/NoProjectSelectedPanel/NoProjectSelectedPanel.jsx";
import CreateProjectPanel from "./components/Panels/CreateProjectPanel/CreateProjectPanel.jsx";
import ProjectDetailsPanel from "./components/Panels/ProjectDetailsPanel/ProjectDetailsPanel.jsx";

function App() {
    const [appState, setAppState] = useState({
        selectedProject: undefined,
        // undefined - NoProjectSelectedPanel
        // null - CreateProjectPanel
        // projectId - ProjectDetailsPanel
        projectsList: [...PROJETCS_LIST_BLUEPRINT]
    });

    function handleAddProject() {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProject: null,
            }
        });
    }

    function handleCancelProjectCreation() {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProject: undefined,
            }
        });
    }

    function handleSaveProject(newProject) {
        // setAppState(prevState => {
        //     return [
        //         ...prevState,
        //         newProject
        //     ];
        // });
    }

    function handleProjectSelect(projectId) {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProject: projectId
            };
        });
    }

    function handleDeleteProjectClick(projectId) {
        // setProjectsList(prevList => {
        //     const deepClone = structuredClone(prevList);
        //     const currentProject = deepClone.find(item => item.projectId === projectId);
        //     const indexOfCurrentProject = deepClone.indexOf(currentProject);

        //     deepClone.splice(indexOfCurrentProject, 1);

        //     return deepClone;
        // });
        // setSelectedProjectId(null);
        setAppState(undefined);
    }

    function handleAddTaskToProject(projectId, projectTask) {
        // setProjectsList(prevList => {
        //     const deepClone = structuredClone(prevList);
        //     const currentProject = deepClone.find(item => item.projectId === projectId);

        //     if (currentProject.projectTasks) {
        //         currentProject.projectTasks.push(projectTask)
        //     } else {
        //         currentProject.projectTasks = [projectTask];
        //     }

        //     return deepClone;
        // });
    }

    function handleDeleteTaskFromProject(projectId, taskId) {
        // setProjectsList(prevList => {
        //     const deepClone = structuredClone(prevList);
        //     const currentProject = deepClone.find(item => item.projectId === projectId);
        //     const currentTask = currentProject.projectTasks.find(item => item.taskId === taskId);
        //     const indexOfCurrentTask = currentProject.projectTasks.indexOf(currentTask);

        //     currentProject.projectTasks.splice(indexOfCurrentTask, 1);

        //     return deepClone;
        // });
    }

    return (
        <>
            <SideMenu
                addProjectHandler={handleAddProject}
                projectsList={appState.projectsList}
                projectSelectHandler={handleProjectSelect}
                // selectedProject={appState.selectedProject}
            />

            {
                appState.selectedProject === undefined && (
                    <NoProjectSelectedPanel addProjectHandler={handleAddProject} />
                )
            }

            {
                appState.selectedProject === null &&
                (<CreateProjectPanel
                    cancelProjectCreationHandler={handleCancelProjectCreation}
                    saveProjectHandler={handleSaveProject}
                />)
            }

            {
                appState.selectedProject && (
                    <ProjectDetailsPanel
                        // selectedProject={appState.projectsList.find(item => item.projectId === selectedProjectId)}
                        deleteProject={handleDeleteProjectClick}
                        addTaskToProject={handleAddTaskToProject}
                        deleteTaskFromProject={handleDeleteTaskFromProject}
                    />
                )
            }
        </>
    );
}

export default App;
