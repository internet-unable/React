import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

import NewChallenge from './NewChallenge.jsx';

export default function Header() {
    const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

    function handleStartAddNewChallenge() {
        setIsCreatingNewChallenge(true);
    }

    function handleDone() {
        setIsCreatingNewChallenge(false);
    }

    return (
        <>
            <AnimatePresence>
                {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
            </AnimatePresence>

            <header id="main-header">
                <h1>Your Challenges</h1>
                <motion.button
                    className="button"
                    onClick={handleStartAddNewChallenge}
                    whileHover={{ scale: 1.1, stiffness: 500 }}
                    transition={{ type: "spring" }}
                >
                    Add Challenge
                </motion.button>
            </header>
        </>
    );
}
