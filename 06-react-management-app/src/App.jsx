import { useState } from "react";

import {PROJETCS_LIST_BLUEPRINT} from './data.js'
import {TASKS_LIST_BLUEPRINT} from './data.js'

import SideMenu from "./components/SideMenu/SideMenu.jsx";
import NoProjectSelectedPanel from "./components/Panels/NoProjectSelectedPanel/NoProjectSelectedPanel.jsx";
import CreateProjectPanel from "./components/Panels/CreateProjectPanel/CreateProjectPanel.jsx";
import ProjectDetailsPanel from "./components/Panels/ProjectDetailsPanel/ProjectDetailsPanel.jsx";

function App() {
    const [appState, setAppState] = useState({
        selectedProjectId: undefined,
        // undefined - NoProjectSelectedPanel
        // null - CreateProjectPanel
        // projectId - ProjectDetailsPanel
        projectsList: [...PROJETCS_LIST_BLUEPRINT],
        taskList: [...TASKS_LIST_BLUEPRINT]
    });

    function handleAddProject() {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        });
    }

    function handleCancelProjectCreation() {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            }
        });
    }

    function handleSaveProject(newProject) {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projectsList: [
                    ...prevState.projectsList,
                    newProject
                ]
            };
        });
        
    }

    function handleProjectSelect(projectId) {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: projectId
            };
        });
    }

    function handleDeleteProject() {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projectsList: prevState.projectsList.filter(project => project.projectId !== prevState.selectedProjectId)
            }
        });
    }

    function handleAddTaskToProject(newTask) {
        setAppState(prevState => {
            return {
                ...prevState,
                taskList: [...prevState.taskList, newTask]
            }
        });
    }

    function handleDeleteTaskFromProject(taskId) {
        setAppState(prevState => {
            return {
                ...prevState,
                taskList: prevState.taskList.filter(task => task.taskId !== taskId)
            }
        });
    }

    return (
        <>
            <SideMenu
                addProjectHandler={handleAddProject}
                projectsList={appState.projectsList}
                projectSelectHandler={handleProjectSelect}
                selectedProjectId={appState.selectedProjectId}
            />

            {
                appState.selectedProjectId === undefined && (
                    <NoProjectSelectedPanel addProjectHandler={handleAddProject} />
                )
            }

            {
                appState.selectedProjectId === null &&
                (<CreateProjectPanel
                    saveProjectHandler={handleSaveProject}
                    cancelProjectCreationHandler={handleCancelProjectCreation}
                />)
            }

            {
                appState.selectedProjectId && (
                    <ProjectDetailsPanel
                        selectedProject={appState.projectsList.find(project => project.projectId === appState.selectedProjectId)}
                        selectedProjectTasks={appState.taskList.filter(task => task.projectId === appState.selectedProjectId)}
                        deleteProjectHandler={handleDeleteProject}
                        addTaskToProjectHandler={handleAddTaskToProject}
                        deleteTaskFromProjectHandler={handleDeleteTaskFromProject}
                    />
                )
            }
        </>
    );
}

export default App;
