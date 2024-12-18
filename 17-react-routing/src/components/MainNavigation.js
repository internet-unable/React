import { Link } from "react-router-dom";

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><Link to="/">Home page</Link></li>
                    <li><Link to="/products">Products page</Link></li>
                </ul>
            </nav>
        </header>
    );
}