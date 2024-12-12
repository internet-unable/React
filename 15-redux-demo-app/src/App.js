import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
    const isUserLogedIn = useSelector((state) => state.auth.isAuth);

    return (
        <>
            <Header />
            {isUserLogedIn && (
                <>
                    <UserProfile />
                    <Counter />
                </>
            )}
            {!isUserLogedIn && <Auth />}
            
        </>
    );
}

export default App;
