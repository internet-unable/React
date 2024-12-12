import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index.js';
import classes from './Header.module.css';

const Header = () => {
    const isUserLogedIn = useSelector((state) => state.auth.isAuth);
    const dispatcher = useDispatch();

    const handleLogout = () => {
        dispatcher(authActions.logout());
    };

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isUserLogedIn && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
