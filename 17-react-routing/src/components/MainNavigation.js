import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive ? classes.active : ''}
                        >
                            Home page
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            end
                            className={({isActive}) => isActive ? classes.active : ''}
                        >
                            Products page
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}