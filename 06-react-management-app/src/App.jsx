import SideMenu from "./components/SideMenu/SideMenu.jsx";
import NoProjectSelectedPanel from "./components/Panels/NoProjectSelectedPanel/NoProjectSelectedPanel.jsx";
import CreateProjectPanel from "./components/Panels/CreateProjectPanel/CreateProjectPanel.jsx";
import ProjectPanel from "./components/Panels/ProjectPanel/ProjectPanel.jsx";

function App() {
    return (
        <>
            <SideMenu />
            <NoProjectSelectedPanel />
            <CreateProjectPanel />
            <ProjectPanel />
        </>
    );
}

export default App;
