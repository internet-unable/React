import { createContext, useContext, useState } from "react";

const AccorionContext = createContext();

export function useAccorionContext() {
    const ctx = useContext(AccorionContext);

    if (!ctx) {
        throw new Error("Accortdion related components must be wrapped by <Accordion>");
    }

    return ctx;
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState();

    const contextValue = {
        openItemId,
        openItem,
        closeItem
    };

    function openItem(id) {
        setOpenItemId(id);
    }

    function closeItem() {
        setOpenItemId(null);
    }

    return (
        <AccorionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccorionContext.Provider>
    );
}