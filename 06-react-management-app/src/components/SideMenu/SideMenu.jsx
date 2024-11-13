import Button from '../Elements/Button/Button.jsx';

export default function SideMenu({addProjectHandler}) {
    return(
        <aside className="h-screen">
            <h2>Your projects</h2>
            <Button onClick={addProjectHandler}>+ Add project</Button>
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </aside>
    );
}