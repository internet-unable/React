import Button from '../Elements/Button/Button.jsx';

export default function SideMenu() {
    return(
        <aside>
            <h2>Your projects</h2>
            <Button>+ Add project</Button>
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </aside>
    );
}